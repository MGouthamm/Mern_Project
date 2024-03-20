import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditEmployee=()=>{
    const {id}=useParams();

    console.log(id);

   //const [empdata, setempdatachange] = useState([])

    const navigate=useNavigate();

    const [active, setchangeactive] = useState(true);
    const [validation, setvalidation] = useState(false);

    const HandleActive=(event)=>{
       // const [name, checked]=event.target;
        setchangeactive(event.target.checked);
    }

    const [editemployeedata, seteditemployeedata] = useState({
        id: '',
        name: '',
        email: '',
        phone: '',
        role: '',
        //active: true // Assuming active is initially true
    });

    useEffect(() => {
        fetch(`http://localhost:3030/employees/${id}`)
            .then(res => res.json())
            .then(resp => seteditemployeedata(resp))
            .catch(err => alert("Failed to get: " + err.message));
    }, [id]);

    const HandleEditEmployeeDataChange = event => {
        const { name, value } = event.target;
        seteditemployeedata(prevState => ({ ...prevState, [name]: value }));
    };

    const HandleProceedEditEmployee = event => {
        event.preventDefault();

        fetch(`http://localhost:3030/employees/${id}`, {
            method: 'PUT',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(editemployeedata)
        })
        .then(res => {
            if (res.ok) {
                alert('Employee Details Changed Successfully...');
                navigate('/EmployeeDetails');
            } else {
                throw new Error('Failed to update employee details');
            }
        })
        .catch(err => alert('Failed: ' + err.message));
    };


    
    
    return(
        <div>
            <h4 className="text-secondary" style={{textAlign: "center"}}>Edit Employee Content Here .......</h4>

            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={HandleProceedEditEmployee}>

                        <div className="card">
                            <div className="card-title">
                                <h4 className="text-primary" style={{textAlign: "center"}}>Edit Employee</h4>

                            </div>
                            <div className="card-body">

                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>ID <span className="errmsg">*</span></label>
                                            <input className="form-control" name="id" value={editemployeedata.id} onChange={HandleEditEmployeeDataChange} />
                                        </div>
                                        {editemployeedata.id.length==0 && <span className="errmsg">Enter ID</span>}
                                    </div>
                                     <div className="col-lg-12">
                                            <div className="form-group">
                                                <label>Name <span className="errmsg">*</span></label>
                                                <input className="form-control" name="name" value={editemployeedata.name} onChange={HandleEditEmployeeDataChange} />
                                            </div>
                                            {editemployeedata.name.length==0 && <span className="errmsg">Enter Name</span>}
                                     </div>
                                     <div className="col-lg-12">
                                            <div className="form-group">
                                                <label>Email <span className="errmsg">*</span></label>
                                                <input className="form-control"name="email" value={editemployeedata.email} onChange={HandleEditEmployeeDataChange}  />
                                            </div>
                                            {editemployeedata.email.length==0 && <span className="errmsg">Enter email</span>}
                                     </div>
                                     <div className="col-lg-12">
                                            <div className="form-group">
                                                <label>Phone <span className="errmsg">*</span></label>
                                                <input className="form-control" name="phone" value={editemployeedata.phone} onChange={HandleEditEmployeeDataChange}  />
                                            </div>
                                            {editemployeedata.phone.length==0 && <span className="errmsg">Enter Phone Number</span>}
                                    </div>
                                    <div className="col-lg-12">
                                            <div className="form-group">
                                                <label>Role <span className="errmsg">*</span></label>
                                                <input className="form-control" name="role" value={editemployeedata.role} onChange={HandleEditEmployeeDataChange}  />
                                            </div>
                                            {editemployeedata.role.length==0 && <span className="errmsg">Enter Role</span>}
                                    </div>
                                    <div className="col-lg-12">
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" name="active" checked={active} onChange={HandleActive} />
                                                <label className="form-check-label">Is Active</label>
                                            </div>
                                            
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <button type="submit" className="btn btn-sm btn-success" >Save</button>
                                <Link className="btn btn-sm btn-danger" style={{marginLeft: 10}} to="/EmployeeDetails">Back</Link>

                            </div>

                        </div>
                    </form>

                </div>

            </div>

            
        </div>
    );
}
export default EditEmployee;