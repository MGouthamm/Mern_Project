var express=require('express');
var server=express();
const employee=require('./model');

server.use(express.json());
//mongoDB Connection...
var mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/employees", {useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>{
    console.log("Database connected Successfully....");
})
.catch((error)=>{
    console.log("Failed to connect mongoDB", error);
})


server.listen(3000,(error)=>{
    if(error){
        console.log("Failed to start Server...",error);
    }
    else{
        console.log("Server Started and Running Successfully....");
    }

});

// server.get('/', (req, res)=>{
//     res.send("<h1>Hello World!!!!, Im responding from server....</h1>")
// })



// server.post('/employee',async (req, res)=>{
//     const {employee}=req.body;
//     try{
//         const newdata= new employee({employee});
//         await newdata.save();
//         return res.json(await employee.find())
//     }
//     catch(err){
//         console.log(err.message);
//     }
// })