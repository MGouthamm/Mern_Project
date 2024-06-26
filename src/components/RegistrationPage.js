import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RegistrationPage=()=>{

    const [registrationdata, setregistrationdata] = useState({
        username:'',
        password:'',
        fullname:'',
        email:'',
        phone:'',
        country:'',
        address:'',
    //    gender:''
    });
    
  // Initialize state for gender
  const [gender, setGender] = useState('');

    const navigate=useNavigate();

   // Function to handle gender change
    const handleGenderChange = (event) => {
        setGender(event.target.value);
      };


    const HandleRegistrationDataChange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setregistrationdata((prevstate)=>{
            return{...prevstate, [name]:value, gender}
        })

    }
    // const HandleRegistration=(e)=>{
    //     e.preventDefault();
    //    // console.log(registrationdata);

    //    fetch("http://localhost:8000/addusers", {registrationdata
    //    // fetch("http://localhost:3030/users",{
    //     //fetch("https://projectdata-1-viir.onrender.com/users",{
    //         // method: "POST",
    //         // headers:{'Content-type':'application/json'},
    //         // body:JSON.stringify(registrationdata)
    //     })
    //     .then((res)=>{
    //             //toast.success('Registered Successfully')
    //             alert('Registered Successfully')
    //           //  localStorage.setItem('jwt', res.jwt);
    //             navigate('/')
    //     }).catch((err)=>{
    //             //toast.error('Failed :'+err.message)
    //             alert('Failed :'+err.message)
    //     })
    //}
    
    
    
    const PostRegistrationData = async (e)=>{
        e.preventDefault();
        const {username, password, fullname, email, phone, country,address, gender}=registrationdata;
        // try{
        //         const response =  fetch("http://localhost:8000/register", {
        //             method:"POST",
        //             headers:{'Content-type':'application/json'},
        //             body:JSON.stringify({username, password, fullname, email, phone, country,address})
        //             //mode:"no-cors"

        //         });
        //       //  console.log(response.json());

        //         const data = response.json();
                
        //         console.log("Data:",data);
        //         console.log("Data status:", data.status);


        //         if(!data || data.status === '422' ){
        //             window.alert("Invalid Registration");
        //             console.log("Invalid Registration")
        //         }
        //         else{
        //             window.alert("Registration Successfull.....");
        //             console.log("Registraion Successfull...");
        //             navigate('/');
        //         }
        //     }
        // catch(error){
        //     console.log(error.message);
        // }

        try{

            const response = await  fetch("http://localhost:8000/register", {
                method:"POST",
                headers:{'Content-type':'application/json'},
                body:JSON.stringify({username, password, fullname, email, phone, country,address, gender})
             });
             if (!response.ok) {
                if (!response || response.status === 422) {
                    window.alert("Invalid Registration, Username Already Exists ");
                    console.log("Invalid Registration")
                } else {
                    throw new Error("Registration Failed");
                }
            } else {
                window.alert("Registration Successful.....");
                console.log("Registration Successful...");
                navigate('/');
            }
        
            const data = await response.json();
            console.log(data);
        }
        catch (error) {
            console.error(error.message);
        }

        
    //   await  fetch("http://localhost:8000/register", {
    //         method:"POST",
    //         headers:{'Content-type':'application/json'},
    //         body:JSON.stringify({username, password, fullname, email, phone, country,address, gender})
    //      })
    //      .then(response=>{
    //         if(!response.ok){
    //             if(!response || response.status === 422){
    //                 window.alert("Invalid Registration, Username Already Exists ");
    //                 console.log("Invalid Registration")
    //             }else{
    //                 throw new Error("Registraion Failed");
    //             }  
    //         }
    //         else{
    //             window.alert("Registration Successfull.....");
    //             console.log("Registraion Successfull...");
    //             navigate('/');
    //         }
    //         return response.json();
    //      })
    //      .catch((error)=>{
    //         console.log(error.message);
    //      })
        

           
        
    }
       
       
    return(
        <div>
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={PostRegistrationData} >
                    <div className="card">
                        <div className="card-header">
                            <h4 style={{textAlign: "center"}}>User Registration</h4>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>User Name <span className="errmsg">*</span></label>
                                        <input className="form-control" type="text" name="username" value={registrationdata.username} onChange={HandleRegistrationDataChange} required/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Password <span className="errmsg">*</span></label>
                                        <input className="form-control" type="password" name="password" value={registrationdata.password} onChange={HandleRegistrationDataChange} required />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Full Name <span className="errmsg">*</span></label>
                                        <input className="form-control" name="fullname" value={registrationdata.fullname} onChange={HandleRegistrationDataChange} required/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Email <span className="errmsg">*</span></label>
                                        <input className="form-control" name="email" value={registrationdata.email} onChange={HandleRegistrationDataChange} required/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Phone <span className="errmsg">*</span></label>
                                        <input className="form-control" name="phone" value={registrationdata.phone} onChange={HandleRegistrationDataChange} required/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Country <span className="errmsg">*</span></label>
                                        <select className="form-control" name="country" value={registrationdata.country} onChange={HandleRegistrationDataChange} required>
                                            <option value="">Select</option>
                                            <option value="india">India</option>
                                            <option value="usa">USA</option>
                                            <option value="uk">UK</option>
                                            <option value="canada">Canada</option>

                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Address <span className="errmsg">*</span></label>
                                        <textarea className="form-control" name="address" value={registrationdata.address} onChange={HandleRegistrationDataChange} required></textarea>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className="form-group" >
                                        <label>Gender <span className="errmsg">*</span></label>
                                        <input type="radio" name="gender" value="gender" checked={gender === 'male'} onChange={handleGenderChange}/> Male
                                        <input type="radio" name="gender" value="gender" checked={gender === 'female'} onChange={handleGenderChange}/> Female
                                    </div>
                                </div>



                                </div>

                            

                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-sm btn-primary" >Register</button>
                            <Link className="btn btn-sm btn-danger" style={{marginLeft: 10}} to="/">Back</Link>

                            {/* <a className="btn btn-sm btn-danger" style={{marginLeft: 10}}>Back</a> */}
                        </div>
                        </div>


                    
                </form>
            </div>            
        </div>
    );
}
export default RegistrationPage;