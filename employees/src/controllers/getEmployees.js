const {createTable, employeeScheme, getQuery} = require("../db/table");


async function getEmployees(client){
    await createTable(client, employeeScheme)
    return await getQuery(employeeScheme.tableName,client)
}

module.exports = {getEmployees}

