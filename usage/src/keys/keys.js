const keys = {
    port: process.env.PORT || 3007,
    jwtSecret: process.env.JWT_SECRET,
    pgHost: process.env.POSTGRES_HOST || "localhost",
    pgUsername:  process.env.POSTGRES_USER || "master",
    pgPassword: process.env.POSTGRES_PASSWORD || "password",
    pgDbName: process.env.POSTGRES_DB || "sheikh",
    pgPort: process.env.POSTGRES_PORT || 5432
}

module.exports = { keys };