const parse = require("pg-connection-string").parse;

module.exports = ({ env }) => {
  const dbUrl = env("DATABASE_URL", "");
  const config = dbUrl ? parse(dbUrl) : {};

  return {
    connection: {
      client: "postgres",
      connection: {
        host: config.host || env("DATABASE_HOST", "127.0.0.1"),
        port: config.port || env.int("DATABASE_PORT", 5432),
        database: config.database || env("DATABASE_NAME", "strapi"),
        user: config.user || env("DATABASE_USERNAME", "strapi"),
        password: config.password || env("DATABASE_PASSWORD", "strapi"),
        ssl: env.bool("DATABASE_SSL", false)
          ? { rejectUnauthorized: false }
          : dbUrl
          ? { rejectUnauthorized: false }
          : false,
      },
      debug: false,
    },
  };
};

