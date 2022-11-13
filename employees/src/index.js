const express = require('express');
const cors = require('cors');
const { keys } = require('./keys/keys');
const app = express();
app.use(express.json());
app.use(cors());
const { port } = keys;

const employeesRouter = require('./routers/getEmployees');

app.use(employeesRouter);

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
});