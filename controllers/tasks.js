const TaskDatabase = require('../models/task');

const getAllTasks = async (req, res) => {
    try {
        const Tasks = await TaskDatabase.find({});

        return res.status(200).json({
            message: "Success",
            Tasks
        });
    } catch (err) {
        return res.status(500).json({
            message: err
        });
    }
};

const createTask = async (req, res) => {
    try {
        const newTask = await TaskDatabase.create(req.body);

        return res.status(201).json({
            message: "Created Successfully.",
            newTask
        });
    } catch (err) {
        return res.status(404).json({
            message: err
        });
    }
};

const getTaskById = (req, res) => {

};

const updateTask = (req, res) => {
    res.send('Update Task');
};

const deleteTask = (req, res) => {
    res.send('Task Deleted.');
};

module.exports = {
    getAllTasks,
    createTask,
    getTaskById,
    updateTask,
    deleteTask
};