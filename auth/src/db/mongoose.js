const mongoose = require('mongoose');
const { keys } = require('../keys/keys');

const { mongodbHost, mongodbPort , mongoCollection, mongodbUser, mongodbPassword} = keys;

const mongodbUrl = process.env.MONGODB || `mongodb://${mongodbUser}:${mongodbPassword}@${mongodbHost}:${mongodbPort}`;

console.log(`URL is ${mongodbUrl}`)

mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    autoCreate: true
}).then((res) => {
    console.log("Mongo is live on port " + (mongodbPort || '27107'));
}).catch((err) => {
    console.log("Failed to connect to Mongo Server", err);
});

