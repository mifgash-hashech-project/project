const axios = require("axios")
const {keys} = require("../keys/keys")
const {scheduleHost, schedulePort} = keys
async function getShiftsFromServer(data){
    const res = await axios.post(`http://${scheduleHost}:${schedulePort}/`, {data});
    return res.data
}

module.exports = {getShiftsFromServer}

