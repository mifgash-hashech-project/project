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
async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function initConnection(){
    await delay(10000)
    client.connect();
}
try{
    initConnection()
}catch (err){
    throw err
}

module.exports = client