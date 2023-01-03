const {randomUUID} = require("crypto");

async function saveScheduleInTable(client, schedule) {
    const scheduleId = randomUUID()
    const {time, date} = getTimeAndDate()
    const tableEntries = getTableEntries(schedule, scheduleId, time, date)
    await createTable(client)
    saveEntries(client, tableEntries)
}

async function createTable(client) {
    // Create the shifts table
    try {
      await client.query(`
      CREATE TABLE IF NOT EXISTS shifts (
        id text PRIMARY KEY,
        shift_id text,
        num_of_employees integer,
        schedule_id text,
        date date,
        time time
      )
    `);
      await client.query(`
      CREATE TABLE IF NOT EXISTS shifts_person (
        id text PRIMARY KEY,
        shift_id text,
        employee text,
        schedule_id text,
        date date,
        time time
      )
    `);
        console.log("tables created");
    } catch (err) {
        console.log(err.stack);
        throw err
    }
}

function saveEntries(client, entriesList) {
// Iterate over the entries in the entriesList array
    for (let i = 0; i < entriesList.length; i++) {
        let entry = entriesList[i];

        // Construct the INSERT query for shifts
        let shiftsQuery = `INSERT INTO shifts (id, shift_id, num_of_employees, schedule_id, date, time) VALUES ($1, $2, $3, $4, $5, $6)`;
        let shiftsValues = [entry.id, entry.shift_id, entry.num_of_employees, entry.schedule_id, entry.date, entry.time];

        // Execute shifts query
        saveQuery(shiftsQuery, shiftsValues, client)
        let shifts_personQuery = `INSERT INTO shifts_person (id, shift_id, employee, schedule_id, date, time) VALUES ($1, $2, $3, $4, $5, $6)`;
        for (const employee of entry.employees){
            let shifts_personValues = [randomUUID(), entry.shift_id, employee, entry.schedule_id, entry.date, entry.time];
            saveQuery(shifts_personQuery, shifts_personValues, client)
        }

    }

}

function saveQuery(query, values, client){
    client.query(query, values, (err, res) => {
        if (err) {
            console.log(err.stack);
            throw err
        } else {
            console.log(`row stored. ${values}`);
        }
    });
}

function getTableEntries(schedule, scheduleId, time, date) {
    const result = []
    for (const day in schedule) {
        for (const shift in schedule[day]) {
            result.push({
                id: randomUUID(),
                shift_id: `${day}_${shift.replace('-', '_')}`,
                num_of_employees: schedule[day][shift].length,
                employees: schedule[day][shift],
                schedule_id: scheduleId,
                date,
                time
            })
        }
    }
    return result
}

function getTimeAndDate() {
    const now = new Date(Date.now())
    const time = now.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit', second: '2-digit'});
    const date = now.toLocaleDateString('en-US', {day: '2-digit', month: '2-digit', year: 'numeric'});
    return {time, date}
}

module.exports = {saveScheduleInTable}

