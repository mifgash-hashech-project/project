const keys = {
    port: process.env.PORT || 3006,
    jwtSecret: process.env.JWT_SECRET,
    scheduleHost: process.env.SCHEDULE_HOST || "localhost",
    schedulePort: process.env.SCHEDULE_PORT || 3002
}

module.exports = { keys };