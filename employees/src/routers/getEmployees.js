const express = require('express');
const getEmployess = require("../employees/getEmployess");
const router = new express.Router();

router.get('/get-employees', async (req, res) => {
    try {
        employees = await getEmployess();
        return res.send({employees});
    } catch (err) {
        console.log(err)
        return res.status(500).send({ message: err.message })
    }
});




module.exports = router;