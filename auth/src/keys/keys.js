const keys = {
    port: process.env.PORT,
    mongodbHost: process.env.MONGODB_HOST,
    mongodbPort: process.env.MONGODB_PORT,
    mongodbUser: process.env.MONGO_INITDB_ROOT_USERNAME,
    mongodbPassword: process.env.MONGO_INITDB_ROOT_PASSWORD,
    mongoCollection: process.env.MONGODB_COLLECTION,
    employeesHost: process.env.EMPLOYEES_HOST,
    employeesPort: process.env.EMPLOYEES_PORT,
    jwtSecret: process.env.JWT_SECRET || "ThisIsMySecret123!",
}

module.exports = { keys };