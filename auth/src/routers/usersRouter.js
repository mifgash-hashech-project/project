const express = require('express');
const router = new express.Router();
const auth = require('../middleware/auth');
const {subscribe} = require("../controllers/subscribe");
const {login} = require("../controllers/login");
const {logout} = require("../controllers/logout");
const {addEmployee} = require("../controllers/employee");

router.post('/user/subscribe', async (req, res) => {

    try {
        const {user, token} = await subscribe(req, "User");
        console.log(`${user} user subscribed.`)
        await addEmployee({...req.body, id:user.id})
        return res.status(201).send({ user, token });

    } catch (err) {
        console.log(err)
        return res.status(500).send();
    }
});

router.post('/user/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const { user, token } = await login(email, password, "User");
        console.log(`${user} user logged in.`)
        return res.send({ user, token });
    } catch (err) {
        return res.status(400).send();
    }
});

router.post('/user/logout', auth, async (req, res) => {
    try {
        await logout(req);
        console.log(`${req.user.name} user logged out.`)
        return res.send()
    } catch (err) {
        return res.status(500).send()
    }
});


module.exports = router;