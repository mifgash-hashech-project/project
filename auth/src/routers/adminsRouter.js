const express = require('express');
const router = new express.Router();
const Admin = require('../db/models/adminModel');
const auth = require('../middleware/auth');
const {login} = require("../controllers/login");
const {logout} = require("../controllers/logout");
const {subscribe} = require("../controllers/subscribe");

router.get('/', async (req, res) => {
    const admin = new Admin({
        name: "admin",
        email: "admin@admin.com",
        password: "Aa123456"
    });
    try {
        await admin.save();
        const token = await admin.generateAuthToken();

        return res.status(201).send({ user: admin, token });

    } catch (err) {
        console.log(err)
        return res.status(500).send("Went wrong!");
    }
});

router.post('/admin/subscribe', async (req, res) => {
    try {
        const {user, token} = await subscribe(req, "Admin");
        console.log(`${user} admin subscribed.`)
        return res.status(201).send({ user, token });

    } catch (err) {

        return res.status(500).send();
    }
});

router.post('/admin/login', async (req, res) => {
    try {

        const { email, password } = req.body;
        const { user, token } = await login(email, password, "Admin");
        console.log(`${user} user logged in.`)
        return res.send({ user, token });
    } catch (err) {
        return res.status(400).send();
    }
});

router.post('/admin/logout', auth, async (req, res) => {
    try {
        await logout(req);
        console.log(`${req.user.name} user logged out.`)
        return res.send();
    } catch (err) {
        return res.status(500).send()
    }
});

router.get('/admin/get-all', auth, async (req, res) => {
    try {
        const admins = await Admin.find({});

        return res.send(admins);
    } catch (err) {
        return res.status(500).send()
    }
});


module.exports = router;