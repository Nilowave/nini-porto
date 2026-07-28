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



