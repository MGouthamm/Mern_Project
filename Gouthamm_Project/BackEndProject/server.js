var express=require('express');
var mongoose=require('mongoose');
const cors=require('cors')
var bodyParser=require('body-parser');
const employeeSchema=require('./model');
const {users, employees, Group7, Group8} = require('./usermodel');
const React = require('react');


//use the express
var app=express();
const PORT=8000;



//const URI = "mongodb://0.0.0.0:0/employeeSchema";
//const URI="mongodb://localhost:27017/employeeSchema";

//Mongo Atlas connection String
const URI="mongodb+srv://mgoutham:gouthamm123@cluster0.pt8suoz.mongodb.net/";

//bodyparser to be used for sending and receiving data

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


//Cross-Origin Resource Sharing (CORS): A mechanism that allows servers to specify which origins
//are allowed to access their resources and under what conditions. 

// This allows all origins - be cautious with this in production environments

// Example allowing specific origin
app.use(cors({
    // Allow requests from multiple origins, including your GitHub Pages site
    origin: [
        'http://localhost:3000',  // Your development origin
        'https://mgouthamm.github.io/MERN-STACK/',  // Your GitHub Pages site
    ],
    optionsSuccessStatus: 200,
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Methods you want to allow
    allowedHeaders: ['Content-Type', 'Authorization'], // Headers to allow
    credentials: true // If you want to allow cookies/credentials
  }));

//Database connection Establishment
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


//writing registration page route to push the data
app.post('/register', async(req, res)=>{
    const {username, password, fullname, email, phone, country,address, gender}=req.body

    if(!username || !password || !fullname || !email || !phone || !country || !address, !gender){
        return res.status(422).json({error: "Please fill the fields properly!!!"});
    }
    try{
        const userExist=await users.findOne({username: username});
        console.log("Creating New user with username: ", username)
        if(userExist){
            return res.status(422).json({error: "Username Already Exists!!!"});          
        }
        else{
            const newuser = new users({username, password, fullname, email, phone, country,address});
            await newuser.save();
            console.log("New User Registered Successfully...")
            res.status(201).json({message:"User Registered Successfully..."});
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
        const user = await users.findOne({ username: username });
        console.log("Trying to Login with username:", user);
        if (user) {
            if (user.password === password) {
                res.json("Success");
                console.log("User Logined Successfully....")
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
app.get('/user', async (req, res) => {
    try {
        const user = await users.find();
        return res.json(user);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

//implementing post route to push new employee data

app.post('/addemployee', async (req, res) => {
    const { empid, empname, empemail, empphone, emprole, empactive } = req.body;

    if (!empid || !empname || !empemail || !empphone || !emprole || empactive === undefined) {
        return res.status(422).json({ error: "Please fill all the fields properly!!!" });
    }

    try {
        // Check if employee with the given empid already exists
        const existingEmployee = await employees.find({ empid: empid });
        console.log("Checking for Employee with Empid:", empid);

        if (existingEmployee.length > 0) {
            return res.status(422).json({ error: "Employee with the same ID already exists!!!" });
        } else {
            // Create a new employee document
            const newEmployee = new employees({ empid, empname, empemail, empphone, emprole, empactive });

            // Save the new employee document to the database
            await newEmployee.save();
            console.log("New Employee Registered Successfully...")
            // Send success response
            return res.status(201).json({ message: "Employee registered successfully." });
        }
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ error: "Internal server error." });
    }
});


//implementing get route to get employees data
app.get('/getemployees', async(req,res)=>{
    try{
        const allemployees = await employees.find();
        return res.json(allemployees)
    }
    catch(error){
        console.log(error.message);
        return res.status(500).json({ error: 'Internal server error' });
    }
})


//specific id based search to get specific employee data
app.get('/getemployee/:empid', async (req, res) => {
    const employeeEmpid = req.params.empid;
    console.log("Get employee with empid:", employeeEmpid);

    try {
        const employeedata = await employees.findOne({empid:employeeEmpid});
        return res.json(employeedata);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

// Update Employee Details based on specific ID
app.put('/updateemployee/:empid', async (req, res) => {
    const employeeEmpid = req.params.empid;

    try {
        // Find the employee by empid
        let employee = await employees.findOne({ empid: employeeEmpid });

        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' });
        }

        // Update the employee's data with the data from the request body
        Object.assign(employee, req.body);

        // Save the updated employee data
        await employee.save();

        return res.json({ message: 'Employee updated successfully', employee });
    } catch (error) {
        console.error('Error updating employee:', error.message);
        return res.status(500).json({ error: 'Internal server error' });
    }
});





// DELETE endpoint to delete a single document by ID
// If empid is your unique identifier, query by it
app.delete('/deleteemployee/:empid', async (req, res) => {
    const employeeEmpid = req.params.empid;
    console.log("Deleting employee with empid:", employeeEmpid);

    try {
        const deletedEmployee = await employees.deleteOne({ empid: employeeEmpid });
        if (deletedEmployee.deletedCount === 0) {
            console.log("Employee not found with empid:", employeeEmpid);
            return res.status(404).json({ error: 'Employee not found' });
        }
        console.log("Employee deleted successfully");
        return res.status(200).json({ message: 'Employee deleted successfully' });
    } catch (error) {
        console.error("Error deleting employee:", error.message);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

  





// //delete record from table

// app.delete('/deleteemployee/:id', async(req,res)=>{
//     try{
//         await employeeSchema.findByIdAndDelete(req.params.id);
//         return res.json({message: 'Employee Recode Deleted Successfully...'})
//     }
//     catch(error){
//         console.log(error.message);
//     }
// })


//Server Connection Establishment
app.listen(PORT,(error)=>{
    if(error){
        console.log("Failed to connect server");
    }
    else{
        console.log(`Server started and Server running on ${PORT}`)
    }
})
