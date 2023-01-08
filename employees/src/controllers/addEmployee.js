const {createTable, getEntry, employeeScheme, getEntryQuery, saveQuery} = require("../db/table");

async function saveEmployee(client, {
    email,
    phone,
    role,
    firstName,
    lastName,
    personalId, id
}) {
    await createTable(client, employeeScheme)
    const entry = getEntry(employeeScheme, {
        email,
        phone,
        role,
        firstName,
        lastName,
        personalId
    })
    entry.id = id
    const {query, values} = getEntryQuery(employeeScheme.tableName, entry)
    saveQuery(query, values, client)
}


module.exports = {saveEmployee}