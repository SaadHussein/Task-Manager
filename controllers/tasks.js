const TaskDatabase = require('../models/task');
const asyncWrapper = require('../middleware/async');
const { createCustomError } = require('../errors/custom-error');

const getAllTasks = asyncWrapper(async (req, res) => {
    const Tasks = await TaskDatabase.find({});

    return res.status(200).json({
        message: "Success",
        tasks: Tasks,
        amount: Tasks.length
    });
});

const createTask = asyncWrapper(async (req, res) => {
    const newTask = await TaskDatabase.create(req.body);

    return res.status(201).json({
        message: "Created Successfully.",
        newTask
    });
});

const getTaskById = asyncWrapper(async (req, res, next) => {
    const id = req.params.id;
    const selectedTask = await TaskDatabase.findById(id);

    if (!selectedTask) {
        return next(createCustomError("Task Not Found.", 404));
    }

    return res.status(200).json({
        message: "Returned Task",
        task: selectedTask
    });
});

const updateTask = asyncWrapper(async (req, res) => {
    const task = await TaskDatabase.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    if (!task) {
        return next(createCustomError("TaskID Not Found.", 404));
    }

    return res.status(200).json({
        message: "Task Updated Successfully.",
        task
    });
});

const deleteTask = asyncWrapper(async (req, res) => {
    const task = await TaskDatabase.findByIdAndDelete(req.params.id);

    if (!task) {
        return next(createCustomError("TaskID Not Found.", 404));
    }

    return res.status(204).json({
        message: "Deleted Successfully",
        task: null
    });
});

module.exports = {
    getAllTasks,
    createTask,
    getTaskById,
    updateTask,
    deleteTask
};