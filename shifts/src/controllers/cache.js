const fs = require('fs')
const {join} = require("path");
const crypto = require("crypto")

function getShiftsFromCache(schedule){
    const shaKey = getSha(schedule)
    const allShifts = getShiftsData()
    if (allShifts[shaKey]){
        return JSON.parse(allShifts[shaKey])
    }
    return null
}

function updateCache(schedule, shifts){
    const cache =  getShiftsData();
    const shaKey = getSha(schedule)
    cache[shaKey] = JSON.stringify(shifts)
    fs.writeFileSync(  join(__dirname, '../db/cache.json'), JSON.stringify(cache))
}

function getShiftsData(){
    const cacheJson = fs.readFileSync(  join(__dirname, '../db/cache.json'))
    return  JSON.parse(cacheJson);
}


function getSha(input) {
    return crypto.createHash('md5').update(JSON.stringify(input)).digest('hex')
}


module.exports = {getShiftsFromCache, updateCache}

