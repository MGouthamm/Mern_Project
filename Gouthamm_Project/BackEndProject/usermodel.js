var mongoose=require('mongoose');

// Define Schemas

const userSchema=mongoose.Schema({

        username:String,
        password:String,
        fullname:String,
        email:String,
        phone:Number,
        country:String,
        address:String,
})

const employeeSchema=mongoose.Schema({
        empid: { type: String, required: true, unique: true }, // Define empid field
        empname:String,
        empemail:String,
        empphone:String,
        emprole:String,
        empactive:Boolean
})



// create models based on schemas
const users = mongoose.model("users", userSchema)
const employees = mongoose.model("employees", employeeSchema)
module.exports= {users, employees };