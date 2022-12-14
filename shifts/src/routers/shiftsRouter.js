const express = require('express');
const {getShiftsFromCache, updateCache} = require("../controllers/cache");
const {getShiftsFromServer} = require("../controllers/server");
const {saveScheduleInTable} = require("../controllers/table");
const router = new express.Router();
const postgreClient = require("../db/postgres")
router.post('/get-shifts', async (req, res) => {
    try {
        const schedule = req.body.data
        let shifts = getShiftsFromCache(schedule)
        if (!!shifts){
            console.log(("found in cache..."))
            await saveScheduleInTable(postgreClient, shifts.schedule)
            return res.status(200).send(shifts);
        }
        console.log("not found. updating cache...")
        shifts = await getShiftsFromServer(schedule)
        updateCache(schedule,shifts)
        await saveScheduleInTable(postgreClient, shifts.schedule)
        return res.status(200).send(shifts);
    } catch (err) {
        console.log(err)
        return res.status(500).send({ message: err.message })
    }
});

module.exports = router;