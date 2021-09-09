module.exports = {
    development: {
      client: "postgresql",
      connection: {
        host: "localhost",
        user: "postgres",
        password: "1574",
        database: "postgres",
      },
      migrations: {
        tableName: "knex_migrations"
      }
    },
  };