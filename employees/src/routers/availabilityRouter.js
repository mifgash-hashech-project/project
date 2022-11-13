const express = require('express');
const router = new express.Router();

router.get('/', async (req, res) => {
    try {
        return res.send();
    } catch (err) {
        console.log(err)
        return res.status(500).send()
    }
});



module.exports = router;