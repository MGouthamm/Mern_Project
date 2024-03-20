import React from "react";
import { Link, Outlet } from "react-router-dom";
import Login from "./LoginPage";





const HomePageComponent=()=>{

    return(

        <div className="container-fluid">

            <div className="row">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">

                    <div className="col-lg-3">
                         <img src="" alt="Logo"/>
                         <Link to="" style={{textDecoration:"none", marginLeft: 10}}>Project Title</Link>
                    </div>
                    <div className="col-lg-3">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{marginLeft: 500}}>
                                        <li class="nav-item">
                                            <a class="nav-link active" aria-current="page" href="#">
                                                <Link to="/Home" style={{textDecoration:"none"}}>Home</Link>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link active" aria-current="page" href="#">
                                                <Link to="/StudentPage" style={{textDecoration:"none"}}>Students</Link>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link active" aria-current="page" href="#">
                                                <Link to="/EmployeeDetails" style={{textDecoration:"none"}}>Employees</Link>
                                            </a>
                                        </li>
                                        
                                    </ul>


                    </div>
                    <div className="col-auto" style={{marginLeft: 400}}>
                            <form class="d-flex" style={{marginLeft: 10}}>
                                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                    <button class="btn btn-outline-success" type="submit">Search</button>
                            </form>
                            
                    </div>
                    <div className="col-auto">
                            <a class="nav-link active" aria-current="page" href="#" style={{marginLeft: 10}}>
                                        <Link to="">Logout</Link>
                            </a>
                    </div>
                </nav>
            </div>
      
            <div className="row">

                <div className="col-lg-3">

                        {/* <h5>First column</h5> */}
                </div>
                <div className="col-lg-3">
                    {/* <h5>Second column</h5> */}
                </div>
                <div className="col-lg-6">
                    <Login/>
                </div>
            </div>
            <div className="row">
                <Outlet/>

            </div>
            
        </div>


























       
    );
 }
 export default HomePageComponent;