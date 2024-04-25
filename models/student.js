
// models/Student.js
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    htno:String,
    name:String
});


module.exports = mongoose.model('student', studentSchema);
