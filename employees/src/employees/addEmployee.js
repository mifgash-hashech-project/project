const fs = require('fs')
const {join} = require("path");
const getEmployees = require("./getEmployees");

const AddEmployee = async (newEmployee) => {
    const employees = await getEmployees()
    employees.push(newEmployee)
    fs.writeFileSync(  join(__dirname, '../db/employees.json'), JSON.stringify(employees))


}

module.exports = AddEmployee;