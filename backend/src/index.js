'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   */
  async bootstrap({ strapi }) {
    try {
      const knex = strapi.db.connection;
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
    } catch (err) {
      strapi.log.error('Bootstrap table check error:', err);
    }
  },
};

