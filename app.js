const express = require('express');
require('dotenv').config();
const TaskRouter = require('./routes/tasks');
const { connectToDB } = require('./db/connect');

const app = express();

app.use(express.json());
app.use('/api/v1/tasks', TaskRouter);

app.get('/helle', (req, res) => {
    res.send('Welcome To Task Manager.');
});


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