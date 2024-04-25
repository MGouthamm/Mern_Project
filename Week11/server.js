const express=require('express')
const mongoose=require('mongoose')
var bodyParser=require('body-parser');
const {student}= require('./Models/student')

const app= express();

const hostname='127.0.0.1'
const PORT = 8000;

//const URI='mongodb://localhost:27017/ClassDatabase'
//const URI='mongodb+srv://Rambabu1969:3377@mru.msqznbz.mongodb.net/?retryWrites=true&w=majority&appName=MRU';
const URI='mongodb+srv://Rambabu1969:3377@mru.msqznbz.mongodb.net/mru';

//bodyparser to be used for sending and receiving data

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Database Connection
mongoose.connect(URI)
.then(()=>{
    console.log('DataBase Connected Successfully....')
})
.catch((error)=>{
    console.log('Failed to connect to Database');
})


//End Points
//End point to insert students
app.post('/addstudent', async (req,res)=>{
    const { htno, name, emailid, group}=req.body;
    if(!htno || !name || !emailid || !group){
        return res.status(400).json({error: "Please fill the fields properly!!!"})
    }
    try{

        const stdexist=await student.findOne({htno:htno})
        if(stdexist){
            return res.status(422).json({error:"Student Already Exist..."});
        }
        else{
            const newstudent= new student({htno, name, emailid, group})
            await newstudent.save();
            console.log("New Student Created Successfully:", newstudent.htno)
            return res.status(201).json({message:"Student Document Created Successfully"})
        }
    }
    catch(error){
        console.log("Error during Student Creation:",error.message);
        res.status(500).json({error:"Internal server Error"})
    }

})


//end point to get students

app.get('/getstudents', async (req,res)=>{
    try {
        const user = await student.find();
        return res.json(user);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ error: 'Internal server error' });
    }
});






//server Listening...
app.listen(PORT, hostname, (error)=>{
    if(!error){
    console.log(`Server Running on http://${hostname}:${PORT}`);
    }
    else{
        console.log('Failed to connect to Server');
    }
})



