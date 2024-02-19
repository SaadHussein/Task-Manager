const mongoose = require('mongoose');
require('dotenv').config();

async function connectToDB() {
    try {
        console.log('Try To Connect...');
        await mongoose.connect(process.env.DATABASE_URL);
        console.log('Connected');
    } catch (err) {
        return {
            message: "Error Happened."
        };
    }
}

module.exports = {
    connectToDB,
};