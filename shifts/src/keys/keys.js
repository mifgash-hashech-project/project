const keys = {
    port: process.env.PORT || 3006,
    jwtSecret: process.env.JWT_SECRET,
    scheduleHost: process.env.SCHEDULE_HOST || "localhost",
    schedulePort: process.env.SCHEDULE_PORT || 3002,
    pgHost: process.env.POSTGRES_HOST || "localhost",
    pgUsername:  process.env.POSTGRES_USER || "master",
    pgPassword: process.env.POSTGRES_PASSWORD || "password",
    pgDbName: process.env.POSTGRES_DB || "sheikh",
    pgPort: process.env.POSTGRES_PORT || 5432
}

module.exports = { keys };