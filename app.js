const express = require('express');
const TaskRouter = require('./routes/tasks');
const { connectToDB } = require('./db/connect');
require('dotenv').config();

const app = express();

app.use(express.static('./public'));
app.use(express.json());

app.use('/api/v1/tasks', TaskRouter);

async function startServer() {
    try {
        await connectToDB();

        app.listen(process.env.PORT, () => {
            console.log('Start Server...');
        });
    } catch (err) {
        console.log(err);
    }
}

startServer();