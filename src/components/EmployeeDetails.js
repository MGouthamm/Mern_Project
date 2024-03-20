import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";



const EmployeeDetails=()=>{

    const tableheading = ['Emp Id', 'Name','Email','Phone', 'Role', 'Active', 'Action'];

    const [employeedata, setemployeedata] = useState([]);

    const navigate=useNavigate();

    // const HandleFetchEmployees= async ()=>{
    //      await fetch("http://localhost:3030/employees").then((respone)=>{
    //         return respone.json;
    //      }).then((resp)=>{
    //          s
    //         })
            
    //      }).catch((err)=>{
    //         alert('Failed :'+err.message)

    //      })
    // }


    const HandlerLoadEmpDetails=(id)=>{
        navigate('/employees/details/'+id);

    }
    const HandlerEditEmp=(id)=>{
        navigate('/employees/edit/'+id);

    }
    const HandlerDeleteEmp=(id)=>{
        navigate('/employees/delete/'+id);

    }




    const HandleFetchEmployees = async()=>{
        const response= await fetch("http://localhost:3030/employees")
        const data= await response.json();    
        setemployeedata(data);     
    }

    useEffect(()=>{
        HandleFetchEmployees();
    },[])

    console.log(employeedata)

    return(
        <div className="container">
            <h4 className="text-danger" style={{textAlign: "center"}}>Display Employee Details Content Here</h4>
            <h4 className="text-secondary" style={{textAlign: "center"}}>React JS CRUD Operations</h4>
            <div className="card">
                <div className="card-header">
                    <h4 className="text-secondary" style={{textAlign: "center"}}>Employee Details</h4>
                </div>
                <div className="card-body">
                    <div>
                        <Link to="/employees/create" className="btn btn-sm btn-success">New (+) </Link>
                    </div>
                    <table className="table table-stripped table-bordered" style={{marginTop: 10}}>
                        <thead className="thead-dark text-white" style={{textAlign: "center"}}>
                                <tr>
                                    <td>S.No.</td>
                                    {tableheading.map((item)=>{
                                        return(<td>{item}</td>)
                                    })}
                                </tr>
                            
                          </thead>
                        <tbody>

                                { employeedata.map((emp,index)=>(
                                        <tr>
                                            <td>{index+1}</td>
                                            <td>{emp.id}</td>
                                            <td>{emp.name}</td>
                                            <td>{emp.email}</td>
                                            <td>{emp.phone}</td>
                                            <td>{emp.role}</td>
                                            <td>{emp.active}</td>
                                            {/* { emp.role === 'Admin' && */}
                                            <td style={{textAlign: "center"}}>
                                                {/* <Link to="/DetailsEmployeePage" className="text-primary" style={{marginLeft: 10}}>Details</Link>
                                                <Link to="/EditEmployeePage" className="text-success" style={{marginLeft: 10}} >Edit</Link>
                                                <Link to="/DeleteEmployeePage" className="text-danger" style={{marginLeft: 10}} >Remove</Link> */}

                                                <a className="text-primary" onClick={()=>{HandlerLoadEmpDetails(emp.id)}} style={{marginLeft: 10}} >Details</a>
                                                <a className="text-success" onClick={()=>{HandlerEditEmp(emp.id)}} style={{marginLeft: 10}}>Edit</a>
                                                <a className="text-danger" onClick={()=>{HandlerDeleteEmp(emp.id)}} style={{marginLeft: 10}} >Remove</a>
                                            
                                            

                                            </td>
                                            {/* } */}
                                           </tr>
                                    ))

                                }
                        </tbody>

                    </table>

                </div>
                <div className="card-footer">
                    <Link className="btn btn-sm btn-danger" style={{marginLeft: 10}} to="/Home">Back</Link>

                </div>

            </div>



        </div>
    );
}
export default EmployeeDetails;