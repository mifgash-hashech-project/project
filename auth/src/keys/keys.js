const keys = {
    port: process.env.PORT || 3003,
    mongodbHost: process.env.MONGODB_HOST || "localhost",
    mongodbPort: process.env.MONGODB_PORT || 27017,
    mongodbUser: process.env.MONGO_INITDB_ROOT_USERNAME || "master",
    mongodbPassword: process.env.MONGO_INITDB_ROOT_PASSWORD || "password",
    mongoCollection: process.env.MONGODB_COLLECTION || "users",
    employeesHost: process.env.EMPLOYEES_HOST || "localhost",
    employeesPort: process.env.EMPLOYEES_PORT || 3001,
    jwtSecret: process.env.JWT_SECRET || "ThisIsMySecret123!",
}

module.exports = { keys };