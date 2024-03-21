import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const AddStudentComponent=()=>{

    const [newstddata, setnewstddata] = useState({
          std_htno:'',
          std_name:'',
          std_password:'',
          std_group:'',
          std_email:'',
          std_mobile:'',
          //gender:'male'
      })
  
      const [gender, setGender] = useState('male');
  
      const navigate=useNavigate();
  
      const HandleGenderChange=(event)=>{
          setGender(event.target.value);
      }

  
      const HandleNewStudentDataChange=(event)=>{

        const name= event.target.name;
        const value=event.target.value;
  
          //setnewstddata(event.target.value);
          setnewstddata((prevstate)=>{
                return{...prevstate, [name]:value, gender}
          })
      }
  
      const HandleAddStudent=(event)=>{
          event.preventDefault();
         console.log(newstddata);
        //  fetch("http://localhost:3030/students",{
        fetch("https://projectdata-1-viir.onrender.com/students",{
            method:"POST",
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(newstddata)
          }).then((res)=>{
            alert("Student Registered Successfully");
            navigate('/StudentPage')
          }).catch((err)=>{
            alert('Failed:'+err.message);
          })
    }
  
      return(
          <div className="offset-lg-6 col-lg-6" style={{marginLeft: 350}}>

              <form onSubmit={HandleAddStudent} className="container">
                  <div className="card">
                      <div className="card-title">
                          <h4 style={{textAlign:"center"}}>New Student</h4>
                      </div>
                      <div className="card-body">
  
                          <div className="row">
                              <div className="col-lg-6">
                                  <div className="form-group">
                                      <label>Hallticket No <span className="errmsg">*</span></label>
                                      <input type="text"  className="form-control" name="std_htno" value={newstddata.std_htno} placeholder="Enter Hallticket No." onChange={HandleNewStudentDataChange} required/>
                                  </div>
                              </div>
                            
                              <div className="col-lg-6">
                                  <div className="form-group">
                                      <label>Name <span className="errmsg">*</span></label>
                                      <input type="text" className="form-control" name="std_name" value={newstddata.std_name} placeholder="Enter Name" onChange={HandleNewStudentDataChange} required/>
                                    </div>
                                </div>
  
                              <div className="col-lg-6">
                                  <div className="form-group">
                                      <label>Password <span className="errmsg">*</span></label>
                                      <input type="password" className="form-control" name="std_password" value={newstddata.std_password} placeholder="Enter Password" onChange={HandleNewStudentDataChange} required/>
                                  </div>
                              </div>
                              <div className="col-lg-6">
                                  <div className="form-group">
                                      <label>Group <span className="errmsg">*</span></label>
                                      <select className="form-control" name="std_group" value={newstddata.std_group} onChange={HandleNewStudentDataChange} required>
                                          <option value="">Select Group</option>
                                          <option value="Group-7">Group-7</option>
                                          <option value="Group-8">Group-8</option>
                                      </select>
                                  </div>
                              </div>                                                                          
  
                              <div className="col-lg-6">
                                  <div className="form-group">
                                      <label>Email <span className="errmsg">*</span></label>
                                      <input type="text" className="form-control" name="std_email" value={newstddata.std_email} placeholder="Enter EmailID" onChange={HandleNewStudentDataChange} required/>
                                  </div>
                                </div>
  
                              <div className="col-lg-6">
                                  <div className="form-group">
                                      <label>Mobile <span className="errmsg">*</span></label>
                                      <input  className="form-control" name="std_mobile" value={newstddata.std_mobile} placeholder="Enter Mobile No." onChange={HandleNewStudentDataChange} required/>
                                  </div>
                                </div>
                              <div className="col-lg-6">
                                   <div className="form-group">
                                          <label>Gender <span className="errmsg">*</span></label>
                                          <input type="radio" name="gender" value="male"  checked={gender==='male'} onChange={HandleGenderChange}/> Male
                                          <input type="radio" name="gender" value="female" checked={gender==='female'} onChange={HandleGenderChange}/> Female
                                    </div>
                              </div>
                        </div>

                        <div className="card-footer">
                            <button className="btn btn-sm btn-success" type="submit">Register</button>
                            <Link className="btn btn-sm btn-danger" to="/StudentPage" style={{marginLeft: 10}}>Back</Link>
                        </div>
                     </div>
                  </div>
                </form>
          </div>
      );
  }
  export default AddStudentComponent;