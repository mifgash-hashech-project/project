const keys = {
    port: process.env.PORT || 3007,
    jwtSecret: process.env.JWT_SECRET,
    // pgHost: process.env.POSTGRES_HOST || "localhost",
    pgHost: "localhost",
    // pgUsername:  process.env.POSTGRES_USER || "master",
    pgUsername: "master",
    // pgPassword: process.env.POSTGRES_PASSWORD || "password",
    pgPassword:  "password",
    // pgDbName: process.env.POSTGRES_DB || "sheikh",
    pgDbName: "sheikh",
    pgPort: process.env.POSTGRES_PORT || 5432
}

module.exports = { keys };