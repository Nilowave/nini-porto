'use strict';

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    if (ctx.path === '/' || ctx.path === '') {
      ctx.redirect('/admin');
      return;
    }
    await next();
  };
};
