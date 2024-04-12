import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";



const DetailsEmployee=()=>{
   const {id}=useParams();

    console.log(id);

   const [empdata, setempdatachange] = useState([])


    const HandlerEmpDetails=()=>{
      fetch('http://localhost:3030/employees/'+id).then((res)=>{
      //fetch('https://projectdata-1-viir.onrender.com/employees/'+id).then((res)=>{
            return res.json();
        }).then((resp)=>{
            setempdatachange(resp);
            console.log(empdata);
        }).catch((err)=>{
            alert("Failed to get:"+err.message);
        })
    }

    useEffect(()=>{
       HandlerEmpDetails();
    },[])


    return(
        <div>
            <h4 className="text-secondary" style={{textAlign: "center"}}>Details Employee Content Here .......</h4>
            <div className="card" style={{width: 500, marginLeft: 500, marginTop: 100, backgroundColor: '#9FE2BF'}}>
                <div className="card-title">
                    <h4 className="text-primary" style={{textAlign:"center"}}>Employee Details</h4>
                </div>
                <div className="card-body">
                    {empdata && 
                        <div>
                            <h3>Employee Name: <b className="text-secondary">{empdata.name}</b> </h3>
                            <h3>Employee ID: <span className="text-danger">{empdata.id}</span> </h3>
                            <h4>Contact Details:</h4>
                            <h5>Email: <span className="text-secondary">{empdata.email}</span></h5>
                            <h5>Phone: <sapn className="text-secondary">{empdata.phone}</sapn></h5>
                            <Link to="/EmployeeDetails" className="text-danger">Back</Link>
                        
                        </div>


                    }

                </div>
            </div>            
        </div>
    );
}
export default DetailsEmployee;