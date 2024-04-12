// writing Schema for the Database

var mongoose=require('mongoose');

const employeeSchema=mongoose.Schema({

    empId:String,
    empname:String,
    empemail:String,
    empphone:Number,
    emprole:String,
    empactive:String
})

module.exports=mongoose.model("employee", employeeSchema);
