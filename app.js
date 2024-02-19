const express = require('express');
require('dotenv').config();
const TaskRouter = require('./routes/tasks');
require('./db/connect');

const app = express();

app.use(express.json());

app.use('/api/v1/tasks', TaskRouter);

app.get('/helle', (req, res) => {
    res.send('Welcome To Task Manager.');
});

app.listen(process.env.PORT, () => {
    console.log('Start Server...');
});