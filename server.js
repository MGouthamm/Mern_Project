var express=require('express');
var mongoose=require('mongoose');
var bodyParser=require('body-parser');
const employeeSchema=require('./model');


//use the express
var app=express();

//bodyparser to be used for sending and receiving data

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//Database connection Establishment

//const DBUrl="mongodb://localhost:27017/employeeSchema";
//mongoose.connect("mongodb://localhost:27017/employeeSchema", {useNewUrlParser:true, useUnifiedTopology:true})
mongoose.connect("mongodb://127.0.0.1:27017/employeeSchema")
.then(()=>{
    console.log("Database connected Successfully....");
})
.catch((error)=>{
    console.log("Failed to connect mongoDB", error);
})



const port=8000;

//Server Connection Establishment
app.listen(port,(error)=>{
    if(error){
        console.log("Failed to connect server");
    }
    else{
        console.log(`Server started and Server running on ${port}`)
    }
})

app.get('/',(req,res)=>{
    res.send('<h2 style="text-align:center;color:red">Hello World!!!!, Im Responding from  Backend Server.....</h2>');
})

//Home Page
app.get('/home',(req,res)=>{
    res.send('<h2 style="text-align:center;color:red">This is Home Page.....</h2>');
})

//About Page
app.get('/about',(req,res)=>{
    res.send('<h2 style="text-align:center;color:red">This is About Page.....</h2>');
})

app.get('/gallery',(req,res)=>{
    res.send('<h2 style="text-align:center;color:red">This is Gallery Page.....</h2>');
})

app.get('/contact',(req,res)=>{
    res.send('<h2 style="text-align:center;color:red">This is Contact Page.....</h2>');
})





//implementing the routes

//writng addemployee route to push the data

app.post('/addemployee', async(req,res)=>{
    const {id, name, email, phone, role, active}=req.body;
    try{
        const newemployee= new employeeSchema({id, name, email, phone, role, active});
        await newemployee.save();

        //every new employee will move to the allemployee object
        const allemployees=await employeeSchema.find();
        return res.json(allemployees);
    }
    catch(error){
        console.log(error.message);
    }
})

//implementing get request
app.get('/getemployees', async(req,res)=>{
    try{
        const allemployees = await employeeSchema.find();
        return res.json(allemployees)
    }
    catch(error){
        console.log(error.message);
    }
})


//specific id based search

app.get('/getemployees/:id', async(req, res)=>{
    try{
        const data=await employeeSchema.findById(req.params.id);
        return res.json(data);
    }
    catch(error){
        console.log(error.message);
    }
})

//delete record from table

app.delete('/deleteemployee/:id', async(req,res)=>{
    try{
        await employeeSchema.findByIdAndDelete(req.params.id);
        return res.json({message: 'Employee Recode Deleted Successfully...'})
    }
    catch(error){
        console.log(error.message);
    }
})