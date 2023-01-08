const employeeScheme = {
    tableName: "employees",
    keys: [
        {email: "text"},
        {phone: "text"},
        {role: "text"},
        {firstName: "text"},
        {lastName: "text"},
        {personalId: "text"},
    ]
}

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

function getTableCreatorQuery({tableName, keys}) {
    const command = `CREATE TABLE IF NOT EXISTS ${tableName}`;
    let query = "id text PRIMARY KEY, \n";
    for (const entry of keys) {

        const [key, value] = Object.entries(entry)[0]
        query += ` ${key} ${value}, \n`
    }
    query = query.slice(0, query.length - 3)
    return `${command} (\n ${query}\n)`
}

function getEntry(scheme, values) {
    const entryValues = Object.values(values)
    const entry = {}
    for (let i = 0; i < entryValues.length; i++) {
        const key = Object.keys(scheme.keys[i])[0]
        entry[key] = entryValues[i]
    }
    return entry
}

function getEntryQuery(tableName, entry) {
    const keys = Object.keys(entry)
    let queryKeys = ""
    let queryKeysIndices = ""
    const values = []
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i]
        queryKeys += `${key}, `
        queryKeysIndices += `$${i + 1}, `
        values.push(entry[key])
    }
    queryKeys = queryKeys.slice(0, queryKeys.length - 2)
    queryKeysIndices = queryKeysIndices.slice(0, queryKeysIndices.length - 2)
    let query = `INSERT INTO ${tableName} (${queryKeys}) VALUES (${queryKeysIndices})`;
    return {query, values}

}

async function createTable(client, tableScheme) {
    // Create the table
    try {
        const tableQuery = getTableCreatorQuery(tableScheme)
        await client.query(tableQuery);
        console.log("table created");
    } catch (err) {
        console.log(err.stack);
        throw err
    }
}

function saveQuery(query, values, client) {
    client.query(query, values, (err, res) => {
        if (err) {
            console.log(err.stack);
            throw err
        } else {
            console.log(`row stored. ${values}`);
        }
    });
}

module.exports = {saveEmployee}

