const fs = require('fs')
const {join} = require("path");

function getPageIdByName(pageName){
    const pagesJson = fs.readFileSync(  join(__dirname, '../db/pages.json'))
    const pages = JSON.parse(pagesJson)
    return pages[pageName].id
}

module.exports = {getPageIdByName}