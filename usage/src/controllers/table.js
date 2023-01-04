const {randomUUID} = require("crypto");

const pageUsageScheme = {
    tableName: "page_usage",
    keys: [
        {page: "text"},
        {page_id: "text"},
        {start_time: "bigint"},
        {end_time: "bigint"},
        {total_usage: "bigint"},
        {user_id: "text"},
        {session_id: "text"}
    ]
}

const appUsageScheme = {
    tableName: "app_usage",
    keys: [
        {total_pages: "integer"},
        {start_time: "bigint"},
        {end_time: "bigint"},
        {total_usage: "bigint"},
        {user_id: "text"},
    ]
}

async function savePageUsage(client, page, pageId, startTime, endTime, totalUsage, userId, sessionId) {
    await createTable(client, pageUsageScheme)
    const pageUsageId = randomUUID();
    const entry = getEntry(pageUsageScheme, {
        page,
        pageId,
        startTime,
        endTime,
        totalUsage,
        userId,
        sessionId
    })
    entry.id = pageUsageId
    const {query, values} = getEntryQuery(pageUsageScheme.tableName, entry)
    saveQuery(query, values, client)
}

async function saveAppUsage(client, totalPages, appStartTime, appEndTime, totalAppUsage, userId, sessionId) {
    await createTable(client, appUsageScheme)
    const entry = getEntry(appUsageScheme, {
        totalPages,
        appStartTime,
        appEndTime,
        totalAppUsage,
        userId
    })
    entry.id = sessionId
    const {query, values} = getEntryQuery(appUsageScheme.tableName, entry)
    saveQuery(query, values, client)
}

function getTableCreatorQuery({tableName, keys}) {
    const command = `CREATE TABLE IF NOT EXISTS ${tableName}`;
    let query = "id text PRIMARY KEY, \n";
    for (const entry of keys) {
        const [key, value] = Object.entries(entry)[0]
        query += ` ${key} ${value}, \n`
    }
    query = query.slice(0,query.length -3)
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
    queryKeys = queryKeys.slice(0,queryKeys.length -2)
    queryKeysIndices = queryKeysIndices.slice(0,queryKeysIndices.length -2)
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

module.exports = {savePageUsage, saveAppUsage}

