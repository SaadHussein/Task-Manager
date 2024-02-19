const getAllTasks = (req, res) => {
    res.send('All Items');
};

const createTask = (req, res) => {
    res.json(req.body);
};

const getTaskById = (req, res) => {
    res.send('get Task');
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