const mongoose=require('mongoose');
const studentSchema= mongoose.Schema({
    htno: String,
    name:String,
    emailid:String,
    group:String
})


//for MRU Database and student collection

const student=mongoose.model('student', studentSchema);
module.exports={student}