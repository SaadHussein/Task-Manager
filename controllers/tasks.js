const TaskDatabase = require('../models/task');

const getAllTasks = async (req, res) => {
    try {
        const Tasks = await TaskDatabase.find({});

        return res.status(200).json({
            message: "Success",
            tasks: Tasks
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

const getTaskById = async (req, res) => {
    try {
        const id = req.params.id;
        const selectedTask = await TaskDatabase.findById(id);

        if (!selectedTask) {
            return res.status(404).json({
                message: "Task Not Found."
            });
        }

        return res.status(200).json({
            message: "Returned Task",
            task: selectedTask
        });
    } catch (err) {
        return res.status(500).json({
            message: err
        });
    }
};

const updateTask = async (req, res) => {
    try {
        const task = await TaskDatabase.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if (!task) {
            return res.status(404).json({
                message: "TaskID Not Found"
            });
        }

        return res.status(200).json({
            message: "Task Updated Successfully.",
            task
        });
    } catch (err) {
        return res.status(500).json({
            message: err
        });
    }
};

const deleteTask = async (req, res) => {
    try {
        const task = await TaskDatabase.findByIdAndDelete(req.params.id);

        if (!task) {
            return res.status(404).json({
                message: "TaskID Not Found."
            });
        }

        return res.status(204).json({
            message: "Deleted Successfully",
            task: null
        });
    } catch (err) {
        return res.status(500).json({
            message: err
        });
    }
};

module.exports = {
    getAllTasks,
    createTask,
    getTaskById,
    updateTask,
    deleteTask
};