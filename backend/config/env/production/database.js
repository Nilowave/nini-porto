module.exports = ({ env }) => {
  const connectionString = env("DATABASE_URL", env("DATABASE_PRIVATE_URL", ""));

  if (connectionString) {
    return {
      connection: {
        client: "postgres",
        connection: {
          connectionString,
          ssl: {
            rejectUnauthorized: false,
          },
        },
        debug: false,
      },
    };
  }

  return {
    connection: {
      client: "postgres",
      connection: {
        host: env("PGHOST", env("DATABASE_HOST", "127.0.0.1")),
        port: env.int("PGPORT", env.int("DATABASE_PORT", 5432)),
        database: env("PGDATABASE", env("DATABASE_NAME", "strapi")),
        user: env("PGUSER", env("DATABASE_USERNAME", "strapi")),
        password: env("PGPASSWORD", env("DATABASE_PASSWORD", "strapi")),
        ssl: {
          rejectUnauthorized: false,
        },
      },
      debug: false,
    },
  };
};


