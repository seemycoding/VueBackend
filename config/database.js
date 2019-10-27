const mongoose = require('mongoose')
const dbConnetion = mongoose.createConnection('mongodb://localhost/studentdetail')
module.exports = dbConnetion;