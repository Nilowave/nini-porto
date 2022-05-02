'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('wave-colorpicker')
      .service('myService')
      .getWelcomeMessage();
  },
};
