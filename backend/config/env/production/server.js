module.exports = ({ env }) => {
  const publicUrl = env('PUBLIC_URL', env('RAILWAY_STATIC_URL', ''));
  const url = publicUrl ? (publicUrl.startsWith('http') ? publicUrl : `https://${publicUrl}`) : undefined;

  return {
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    proxy: true,
    ...(url ? { url } : {}),
    app: {
      keys: env.array('APP_KEYS'),
    },
  };
};


