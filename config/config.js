module.exports = {
    development: {
        username: "root",
        password: "Roche1#b",
        database: "schedules_db",
        host: "127.0.0.1",
        dialect: "mysql"
    },
    production: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect: "mysql"
    }
};