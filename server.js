var express=require('express');
var mongoose=require('mongoose');
var bodyParser=require('body-parser');
const employeeSchema=require('./model');
const userSchema=require('./usermodel');
const React = require('react');


//use the express
var app=express();
const PORT=8000;



//bodyparser to be used for sending and receiving data
//const URI = "mongodb://0.0.0.0:0/employeeSchema";
const URI="mongodb://localhost:27017/employeeSchema";

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


//Database connection Establishment

//const DBUrl="mongodb://localhost:27017/employeeSchema";
//mongoose.connect("mongodb://localhost:27017/employeeSchema", {useNewUrlParser:true, useUnifiedTopology:true})
mongoose.connect(URI)
.then(()=>{
    console.log("Database connected Successfully....");
})
.catch((error)=>{
    console.log("Failed to connect mongoDB", error);
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
   const {empId, empname, empemail, empphone, emprole, empactive}=req.body;
    try{
        const newemployee= new employeeSchema({empId, empname, empemail, empphone, emprole, empactive});
        await newemployee.save();

        //every new employee will move to the allemployee object
        const allemployees=await employeeSchema.find();
        return res.json(allemployees);
    }
    catch(error){
        console.log(error.message);
    }
})

//writing registration page route to push the data

app.post('/register', async(req, res)=>{
    const {username, password, fullname, email, phone, country,address, gender}=req.body

    if(!username || !password || !fullname || !email || !phone || !country || !address, !gender){
        return res.status(422).json({error: "Please fill the fields properly!!!"});
    }
    try{
        const userExist=await userSchema.findOne({username: username});
        if(userExist){
            return res.status(422).json({error: "Username Already Exists!!!"});
            
        }
        else{
            const newuser = new userSchema({username, password, fullname, email, phone, country,address});
            await newuser.save();
            res.status(201).json({message:"User Registered Successfully..."});
    
            //every new users will move to the users object
         //   const newusers=await userSchema.find();
           // return res.json(newusers);

        }
       
    }
    catch(error){
        console.log(error.message);
    }
})

//writing registration page route to get the data
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await userSchema.findOne({ username: username });

        if (user) {
            if (user.password === password) {
                res.json("Success");
            } else {
                res.json("Password is incorrect...");
            }
        } else {
            res.json("No record exists for this username...");
        }
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json("An error occurred while processing your request...");
    }
});

//writing homepage route to display data




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


//Server Connection Establishment
app.listen(PORT,(error)=>{
    if(error){
        console.log("Failed to connect server");
    }
    else{
        console.log(`Server started and Server running on ${PORT}`)
    }
})
