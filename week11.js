var express=require('express');
var mongoose=require('mongoose');
var {student} = require('./models/student')
var bodyParser=require('body-parser');

var app=express();
const PORT=8000;


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


//Database connection Establishment
const URI = "mongodb://0.0.0.0:0/studentSchema";



app.post('/addstudent', async (req,res)=>{

    const {htno, name}=req.body;
    if(!htno || !name){
        return res.status(422).json({ error: "Please fill all the fields properly!!!" });
    }
    try{
        const studentexist= await student.find({htno:htno})
        console.log("Checking for student with htno:", htno);
        if(studentexist.length > 0){
             return res.status(422).json({ error: "Student with the same Htno already exists!!!" });
        } else {
            const newstudent = new students({htno, name})
            await newstudent.save();
            return res.status(201).json({ message: "Student added successfully." });
        }
    
    }
    catch(error){
        console.log(error.message);
        return res.status(500).json({ error: "Internal server error." });
    
    }
})

app.get('/students', (req,res)=>{
    
})

mongoose.connect(URI)
.then(()=>{
    console.log("Database connected Successfully....");
})
.catch((error)=>{
    console.log("Failed to connect mongoDB", error);
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
