const express = require('express');

const router = new express.Router();
const postgresClient = require("../db/postgres")
const {savePageUsage, saveAppUsage} = require("../controllers/table");
const {getPageIdByName} = require("../controllers/page");

router.post('/page-usage', async (req, res) => {
    try {
        const {route, startTime, endTime, totalUsage, userId, sessionId} = req.body.data
        const pageId = getPageIdByName(route)
        await savePageUsage(postgresClient, route, pageId, startTime, endTime, totalUsage, userId, sessionId)
        return res.status(200).send();
    } catch (err) {
        console.log(err)
        return res.status(500).send({ message: err.message })
    }
});

router.post('/app-usage', async (req, res) => {
    try {
        const {totalPages, appStartTime, appEndTime, totalAppUsage, userId, sessionId} = req.body.data
        await saveAppUsage(postgresClient, totalPages, appStartTime, appEndTime, totalAppUsage, userId, sessionId)
        return res.status(200).send();
    } catch (err) {
        console.log(err)
        return res.status(500).send({ message: err.message })
    }
});

module.exports = router;