const fs = require('fs')
const {join} = require("path");
const getEmployees = () => {
    const empJson = fs.readFileSync(  join(__dirname, '../db/employees.json'))
    return JSON.parse(empJson);

}

module.exports = getEmployees;