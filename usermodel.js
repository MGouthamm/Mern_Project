var mongoose=require('mongoose');

const userSchema=mongoose.Schema({

        username:String,
        password:String,
        fullname:String,
        email:String,
        phone:Number,
        country:String,
        address:String,
})
module.exports=mongoose.model("users", userSchema)