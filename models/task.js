const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Task must have a Name'],
        trim: true,
        maxLength: [20, 'Name Length Must be Less Than or Equal 20 Letter.']
    },
    completed: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Task', TaskSchema);