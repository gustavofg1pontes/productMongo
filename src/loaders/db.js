const mongoose = require('mongoose');
require('dotenv').config()


async function startDB() {
    await mongoose.connect(process.env.DB_CONFIG)
}

module.exports = startDB;