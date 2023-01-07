const axios = require("axios")
const {keys} = require("../keys/keys")
const {employeesHost, employeesPort} = keys

async function addEmployee({
                               email,
                               phone,
                               role,
                               firstName,
                               lastName,
                               personalId, id
                           }) {
    await axios.post(`http://${employeesHost}:${employeesPort}/add-employee`, {
        email,
        phone,
        role,
        firstName,
        lastName,
        personalId, id
    });
}

module.exports = {addEmployee}