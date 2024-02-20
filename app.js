const express = require('express');
const TaskRouter = require('./routes/tasks');
const { connectToDB } = require('./db/connect');
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
require('dotenv').config();

const app = express();

app.use(express.static('./public'));
app.use(express.json());

app.use('/api/v1/tasks', TaskRouter);

app.use(notFound);
app.use(errorHandlerMiddleware);

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