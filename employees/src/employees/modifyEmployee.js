const fs = require('fs')
const {join} = require("path");
const getEmployees = require("./getEmployees");

const modifyEmployee = async (employee) => {

    const employees = await getEmployees()
    for(let i=0;i<employees.length; i++){
        if (!!employee && employees[i].id == employee.id){
            employees[i] = employee
            break;
        }
    }
    fs.writeFileSync(  join(__dirname, '../db/employees.json'), JSON.stringify(employees))


}

module.exports = modifyEmployee;