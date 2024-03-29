
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";



function ProtectedRoute(){
    const navigate=useNavigate();
    const jwt=localStorage.getItem('jwt');
    if(!jwt){
        return navigate('/');
    }
    else {
        return navigate('/Home');
    }
}


const Login=()=>{
 
    const [username, updateusername]=useState('');
    const [password, updatepassword]=useState('');

    //for Navigation purpose

    const navigate=useNavigate();

      useEffect(()=>{

        },[])
    

    //Handler for Proceed Login
    const ProceedLogin=(event)=>{
        event.preventDefault();
        //console.log(loginformdata);
        if(validate()){
   
            fetch("http://localhost:3030/users").then(res=>{
            //  const res=fetch("https://projectdata-1-viir.onrender.com/users").then(res=>{
                return res.json();
            }).then((response)=>{
                response.map((user)=>{
                    if(user.username===username){
                        if(user.password === password){
                        alert('Login Suceessfully');
                        sessionStorage.setItem('username', username)
                            navigate('/Home');
                           // history.push('/Home');
                        }
                    }
                        else{
                            alert('Please Enter valid Credentials');
                        }
                })
            }).catch((err)=>{
                alert('Login Failed due to:'+err.message);
            })
        }
    }

    const validate=()=>{
        let result=true;
        if(username===''|| username===null){
            result=false;
            alert('Please Enter Username');   
        }
        if(password===''||password===null){
            result=false;
            alert('Please Enter Password');
        }
        return result;
    }

    return(
        <div className="row">
          
            <div class="login-page bg-light">
                <div class="container" style={{width:1000}}>
                    <div class="row">
                        <div class="col-lg-11 offset-lg-1">
                        <h3 class="mb-3" style={{textAlign:"center"}}>Login Now</h3>
                            <div class="bg-white shadow rounded" >
                                <div class="row">
                                    <div class="col-md-7 pe-0">
                                        <div class="form-left h-100 py-5 px-5">
                                            <form onSubmit={ProceedLogin} class="row g-4">
                                                    <div class="col-12">
                                                        <label style={{display:"flex"}}>Username<span class="text-danger">*</span></label>
                                                        <div class="input-group">
                                                            <div class="input-group-text"><i class="bi bi-person-fill"></i></div>
                                                            <input type="text" class="form-control" name="username" value={username} placeholder="Enter Username" onChange={e=>updateusername(e.target.value)}/>
                                                        </div>
                                                    </div>

                                                    <div class="col-12">
                                                        <label style={{display: "flex"}}>Password<span class="text-danger">*</span></label>
                                                        <div class="input-group">
                                                            <div class="input-group-text"><i class="bi bi-lock-fill"></i></div>
                                                            <input type="password" class="form-control" name="password" value={password} placeholder="Enter Password" onChange={e=>updatepassword(e.target.value)}/>
                                                        </div>
                                                    </div>

                                                    <div class="col-auto">
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" id="inlineFormCheck"/>
                                                            <label class="form-check-label" for="inlineFormCheck">Remember me</label>
                                                        </div>
                                                    </div>

                                                    <div class="col-auto">
                                                        <a href="#" class="float-end text-primary">Forgot Password?</a>
                                                    </div>

                                                    <div class="col-auto" style={{display:"flex"}}>
                                                        <button type="submit" class="btn btn-sm btn-primary">Login</button>
                                                        <Link className="text-danger" style={{marginLeft: 10}} to="/RegistrationPage">New User</Link>
                                                    </div>                                     
                                            </form>
                                        </div>
                                    </div>
                                    <div class="col-md-5 ps-0 d-none d-md-block">
                                        <div class="form-right h-100 bg-primary text-white text-center pt-5">
                                            <i class="bi bi-bootstrap"></i>
                                            <h2 class="fs-1">Welcome Back!!!</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <p class="text-end text-secondary mt-3">Bootstrap 5 Login Page Design</p> */}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Login;
