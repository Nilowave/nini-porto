'use strict';

async function syncDb(strapi) {
  try {
    const knex = strapi.db.connection;

    // 1. Auto-create missing link tables if not present
    const hasTable = await knex.schema.hasTable('admin_permissions_role_links');
    if (!hasTable) {
      await knex.schema.createTable('admin_permissions_role_links', (table) => {
        table.increments('id');
        table.integer('permission_id');
        table.integer('role_id');
        table.float('permission_order');
        table.float('role_order');
      });
      strapi.log.info('Auto-created missing admin_permissions_role_links table');
    }

    const hasUserRolesTable = await knex.schema.hasTable('admin_users_roles_links');
    if (!hasUserRolesTable) {
      await knex.schema.createTable('admin_users_roles_links', (table) => {
        table.increments('id');
        table.integer('user_id');
        table.integer('role_id');
        table.float('user_order');
        table.float('role_order');
      });
      strapi.log.info('Auto-created missing admin_users_roles_links table');
    }

    // 2. Synchronize PostgreSQL primary key sequences to prevent duplicate key errors
    const isPostgres = knex.client.config.client === 'postgres' || knex.client.config.client === 'pg';
    if (isPostgres) {
      await knex.raw(`
        DO $$
        DECLARE
            r RECORD;
        BEGIN
            FOR r IN 
                SELECT table_name 
                FROM information_schema.tables 
                WHERE table_schema = 'public' AND table_type = 'BASE TABLE'
            LOOP
                BEGIN
                    EXECUTE format('SELECT setval(pg_get_serial_sequence(%L, ''id''), COALESCE((SELECT MAX(id) FROM %I), 1), true);', r.table_name, r.table_name);
                EXCEPTION WHEN OTHERS THEN
                    -- Ignore tables without an 'id' column or sequence
                END;
            END LOOP;
        END $$;
      `).catch((e) => {
        strapi.log.warn('Sequence sync warning:', e.message);
      });
      strapi.log.info('PostgreSQL primary key sequences synchronized successfully');
    }

    // 3. Auto-create missing files_related_morphs table if truncated in Postgres
    const hasMorphsTable = await knex.schema.hasTable('files_related_morphs');
    if (!hasMorphsTable) {
      await knex.schema.createTable('files_related_morphs', (table) => {
        table.increments('id');
        table.integer('file_id');
        table.integer('related_id');
        table.string('related_type');
        table.string('field');
        table.integer('order');
      });
      strapi.log.info('Auto-created missing files_related_morphs table');

      const hasMph = await knex.schema.hasTable('files_related_mph');
      if (hasMph) {
        await knex.raw(`
          INSERT INTO files_related_morphs (file_id, related_id, related_type, field, "order")
          SELECT file_id, related_id, related_type, field, "order" FROM files_related_mph
          ON CONFLICT DO NOTHING;
        `).catch(() => {});
        strapi.log.info('Populated files_related_morphs from files_related_mph');
      // 4. Auto-sync truncated _cmps component tables in Postgres
      if (isPostgres) {
        const cmpsResult = await knex.raw(`
          SELECT table_name 
          FROM information_schema.tables 
          WHERE table_schema = 'public' AND table_name LIKE '%_cmps';
        `).catch(() => ({ rows: [] }));

        for (const row of (cmpsResult.rows || [])) {
          const sourceTable = row.table_name;
          const targetTable = sourceTable.replace(/_cmps$/, '_components');
          await knex.raw(`CREATE TABLE IF NOT EXISTS "${targetTable}" (LIKE "${sourceTable}" INCLUDING ALL);`).catch(() => {});
          await knex.raw(`INSERT INTO "${targetTable}" SELECT * FROM "${sourceTable}" ON CONFLICT DO NOTHING;`).catch(() => {});
        }

        // 5. Auto-sync singular component tables in Postgres
        const singularMap = {
          'components_content_c01_text_cta': 'components_content_c01_text_ctas',
          'components_content_c02_personal': 'components_content_c02_personals',
          'components_content_c03_skill_set': 'components_content_c03_skill_sets',
          'components_content_c05_image_gallery': 'components_content_c05_image_galleries',
          'components_content_c06_timeline': 'components_content_c06_timelines',
          'components_content_c07_references': 'components_content_c07_references',
          'components_content_c08_interests': 'components_content_c08_interests',
          'components_content_c09_calendar': 'components_content_c09_calendars',
          'components_content_c10_contact_form': 'components_content_c10_contact_forms',
        };
        for (const [singular, plural] of Object.entries(singularMap)) {
          const hasPlural = await knex.schema.hasTable(plural);
          if (hasPlural) {
            await knex.raw(`CREATE TABLE IF NOT EXISTS "${singular}" (LIKE "${plural}" INCLUDING ALL);`).catch(() => {});
            await knex.raw(`INSERT INTO "${singular}" SELECT * FROM "${plural}" ON CONFLICT DO NOTHING;`).catch(() => {});
          }
        }
      }
    }
  } catch (err) {
    strapi.log.error('DB sync helper error:', err);
  }
}




module.exports = {
  async register({ strapi }) {
    await syncDb(strapi);
  },

  async bootstrap({ strapi }) {
    await syncDb(strapi);
  },
};



