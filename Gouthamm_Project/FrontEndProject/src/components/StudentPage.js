import React, { useEffect, useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import GenderSelection from "./Gender";



const StudentPage=()=>{

    const [StudentData, setStudentData] = useState([]);

    const navigate=useNavigate(); 
  
  // Handler for View Student Details

    const HandlerLoadStdDetails=(id)=>{
      navigate(`/student/details/${id}`);

  }

  // Handler for Edit Student Details

  const HandlerEditStd=(id)=>{
    navigate(`/student/edit/${id}`);

  }
    // Handler for Delete Student Details

    const HandlerDeleteStd = async (id) => {
    
      // write code for delete response using fetch API

    }


      const HandleFetchStudent=async ()=>{

        // const response = await fetch("http://localhost:3030/students");
        // //const response = await fetch("https://projectdata-1-viir.onrender.com/students");
        // const studentsdata = await response.json();
        // setStudentData(studentsdata);


        // write code to display student info using fetch API


      }

      useEffect(()=>{
        HandleFetchStudent();
      },[])

    return(
        <div>
                <h4 className="text-danger" style={{textAlign: "center"}}>Display StudentPage Content Here .......</h4>
                    {/* <div style={{width: 800, alignItems:"center", alignContent: "center", marginLeft: 100, marginTop: 100}}> */}
                    <div className="card" style={{width: 900, marginLeft: 300}}>

                        <div className="card-header">
                            <div className="card-title">
                                        <h4 style={{textAlign: "center"}}>Students Data</h4>
                            </div>
                        </div>

                        <div className="card-body">
                                <table class="table table-stripped table-bordered table-hover" style={{textAlign:"center" }}>
                                        <thead class="thead-dark">
                                            <tr>
                                            <th scope="col">S.No</th>
                                            <th scope="col">Ht No.</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Group</th>
                                            <th scope="col">EmailId</th>
                                            <th scope="col">Mobile</th>
                                            <th scope="col">Gender</th>
                                            <th scope="col">Actions</th>
                                            </tr>
                                        </thead>
                                    
                                        <tbody>
                                        {StudentData.map((student, index) => (
                                            <tr>
                                            <th>{index + 1}</th>
                                            <td>{student.std_htno}</td>
                                            <td>{student.std_name}</td>
                                            <td>{student.std_group}</td>
                                            <td>{student.std_email}</td>
                                            <td>{student.std_mobile}</td>
                                            <td>{student.gender}</td>
                                            <td style={{textAlign: "center"}}>
                                                <a className="text-primary" onClick={()=>{HandlerLoadStdDetails(student.std_htno)}} style={{marginLeft: 10}} >View</a>
                                                <a className="text-success" onClick={()=>{HandlerEditStd(student.std_htno)}} style={{marginLeft: 10}}>Edit</a>
                                                <a className="text-danger" onClick={()=>{HandlerDeleteStd(student.std_htno)}} style={{marginLeft: 10}} >Delete</a>
                                            </td>
                                            </tr>
                                            
                                            ))}
                                            </tbody>
                                </table>

                        </div>  
                        <div className="card-footer">
                                    <Link className="btn btn-sm btn-success" to="/NewStudentPage">Add Student</Link>
                                    <Link className="btn btn-sm btn-danger" to="/home" style={{marginLeft: 10}}>Back</Link>

                        </div>


                    </div>
                    
        </div>
    );
}
export default StudentPage;