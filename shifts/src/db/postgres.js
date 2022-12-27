const { Client } = require('pg');
const keys = require("../keys/keys")
const {pgHost, pgUsername, pgPassword, pgDbName, pgPort} = keys
// Connect to the database
const client = new Client({
    user: 'master',
    host: pgHost,
    database: 'sheikh',
    password: 'password',
    port: pgPort,
});
try{
    client.connect();
}catch (err){
    throw err
}

module.exports = client