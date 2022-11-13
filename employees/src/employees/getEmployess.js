const fs = require('fs')
const {join} = require("path");
const getEmployess = async () => {
    const empJson = fs.readFileSync(  join(__dirname, '../db/employees.json'))
    return JSON.parse(empJson);

}

module.exports = getEmployess;