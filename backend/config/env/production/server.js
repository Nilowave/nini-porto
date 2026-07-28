module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  proxy: true,
  url: env('PUBLIC_URL', env('RAILWAY_STATIC_URL', '')),
  app: {
    keys: env.array('APP_KEYS'),
  },
});

