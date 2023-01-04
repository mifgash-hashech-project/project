const { Client } = require('pg');
const {keys} = require("../keys/keys")
const {pgHost, pgUsername, pgPassword, pgDbName, pgPort} = keys

// Connect to the database
const client = new Client({
    user: pgUsername,
    host: pgHost,
    database: pgDbName,
    password: pgPassword,
    port: pgPort,
});
try{
    client.connect();
}catch (err){
    process.exit(1)
}

module.exports = client