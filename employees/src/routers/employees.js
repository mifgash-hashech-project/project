const express = require('express');
const {getEmployees} = require("../controllers/getEmployees");
const AddEmployee = require("../employees/addEmployee");
const modifyEmployee = require("../employees/modifyEmployee");
const postgresClient = require("../db/postgres")
const {saveEmployee} = require("../db/table");
const router = new express.Router();

router.get('/get-employees', async (req, res) => {
    try {
        const employees = await getEmployees(postgresClient);
        return res.send({employees});
    } catch (err) {
        console.log(err)
        return res.status(500).send({ message: err.message })
    }
});

router.get('/get-employee/:id', async (req, res) => {
    try {
        const id = req.params.id
        employees = await getEmployees();

        for (const employee of employees){
            if (employee.id == id) return res.send({employee: employee});
        }
        return res.status(404).send()
    } catch (err) {
        console.log(err)
        return res.status(500).send({ message: err.message })
    }
});

router.post('/add-employee', async (req, res) => {
    try {
        await saveEmployee(postgresClient, req.body)
        return res.status(200).send();
    } catch (err) {
        console.log(err)
        return res.status(500).send({ message: err.message })
    }
});

router.patch('/modify-employee', async (req, res) => {
    try {

        const employee = req.body.employee
        await modifyEmployee(employee);
        return res.status(200).send();
    } catch (err) {
        console.log(err)
        return res.status(500).send({ message: err.message })
    }
});




module.exports = router;