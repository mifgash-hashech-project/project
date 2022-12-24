const express = require('express');
const cors = require('cors');
const { keys } = require('./keys/keys');
const app = express();
app.use(express.json());
app.use(cors());
const { port } = keys;

const cacheRouter = require('./routers/shiftsRouter');

app.use(cacheRouter);

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
});