const express = require('express');
const taskRouter = express.Router();
const { getAllTasks, createTask, getTaskById, updateTask, deleteTask } = require('../controllers/tasks');

taskRouter.route('/').get(getAllTasks).post(createTask);
taskRouter.route('/:id').get(getTaskById).patch(updateTask).delete(deleteTask);

module.exports = taskRouter;