module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    pool: { min: 0, max: 5 },
    connection: {
      host: env("DATABASE_HOST", "localhost"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "root"),
      user: env("DATABASE_USERNAME", "root"),
      password: env("DATABASE_PASSWORD", "root"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
