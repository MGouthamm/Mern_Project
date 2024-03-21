
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Login=()=>{
 
   const [loginformdata, setloginformdata] = useState({
        username:'',
        password:''
    });

    //for Navigation purpose

    const navigate=useNavigate();

    //Handler for Form Data Change
    const HandleFormDataChange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setloginformdata((prevstate)=>{
            return{...prevstate, [name]:value}
        });
    }

    //Handler for Proceed Login
    const ProceedLogin=(event)=>{
        event.preventDefault();
        //console.log(loginformdata);
        if(validate()){
           // console.log('proceed');


    //    fetch("http://localhost:3030/users").then(res=>{

        const res=fetch("https://projectdata-1-viir.onrender.com/users").then(res=>{
            return res.json();
        }).then(response=>{
             response.map((user)=>{
                // if(Object.keys(user).length===0){
                //       alert('Please Enter Valid Username');
                // }else{
                if(user.username===loginformdata.username)
                    if(user.password===loginformdata.password){
                      //  alert('Login Suceessfully');
                        navigate('/Home');
                    }
                    else{
                        alert('Invalid Credentials');
                    }
                
            //}
            })
        }).catch((err)=>{
             alert('Login Failed due to:'+err.message);
        })


        
          
    //        fetch("http://localhost:4000/users/"+loginformdata.username).then((res)=>{
    //         if(!res.ok){
    //             throw new Error('User not Found');
    //         }
    //         return res.json();
    //         console.log(res.json());
    //        }).then((users)=>{
    //             users.forEach((user) => {

    //                 if(Object.keys(user).length===0){
    //                     alert('Please Enter Valid Username');
    //                 }else{
    //                     if(user.password===loginformdata.password){
    //                         navigate('/WelcomePage');
    //                     }else{
    //                         alert('Please Enter Valid Credentials');
    //                     }
    //                 }
    //             });
    //             //console.log(resp);
               

    //        }).catch((err)=>{
    //             alert('Login Failed due to:'+err.message);
    //        })

         }
    }


    const validate=()=>{
        let result=true;
        if(loginformdata.username===''|| loginformdata.username===null){
            result=false;
            alert('Please Enter Username');   
        }
        if(loginformdata.password===''||loginformdata.password===null){
            result=false;
            alert('Please Enter Password');
        }
        return result;

    }



    return(
        <div className="row">
          
            <div class="login-page bg-light">
                <div class="container">
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
                                                            <input type="text" class="form-control" name="username" value={loginformdata.username} placeholder="Enter Username" onChange={HandleFormDataChange}/>
                                                        </div>
                                                    </div>

                                                    <div class="col-12">
                                                        <label style={{display: "flex"}}>Password<span class="text-danger">*</span></label>
                                                        <div class="input-group">
                                                            <div class="input-group-text"><i class="bi bi-lock-fill"></i></div>
                                                            <input type="password" class="form-control" name="password" value={loginformdata.password} placeholder="Enter Password" onChange={HandleFormDataChange}/>
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
