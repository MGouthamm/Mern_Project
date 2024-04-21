//import logo from './logo.svg';
import { BrowserRouter, HashRouter, Link, Outlet, Route, Routes } from 'react-router-dom';
  
import './App.css';

import StudentPage from './components/StudentPage';
import AddStudentComponent from './components/NewStudentPage';
import RegistrationPage from './components/RegistrationPage';
import EmployeeDetails from './components/EmployeeDetails';
import DetailsEmployee from './components/DetailsEmployeePage';
import CreateEmployee from './components/CreateEmployeePage';
import EditEmployee from './components/EditEmployeePage';
import GenderSelection from './components/Gender';
import Login from './components/LoginPage';
import HomeComponent from './components/HomePage';
import { useState } from 'react';









function App() {

    return (
    <div className="App">
       
      <h3 className='text-secondary' style={{textAlign: 'center'}}>Welcome to Sample MERN Project</h3>
      <div className='container-fluid'>

      <BrowserRouter> 
          <Routes>
            <Route  path='/MERN-STACK/' element={<Login/>}/>
            <Route exact path='/login' element={<Login/>}/>
            <Route path='/home' element={<HomeComponent/>}/>

           {/* <ProtectedRoute path='/Home'><HomePageComponent/></ProtectedRoute> */}
            <Route path='/StudentPage' element={<StudentPage/>}/>

            <Route path='/NewStudentPage' element={<AddStudentComponent/>}/>
            <Route path='/register' element={<RegistrationPage/>}/>
            <Route path='/EmployeeDetails' element={<EmployeeDetails/>}/>
            <Route path='/createemployee' element={<CreateEmployee/>}/>
            <Route path='/employee/edit/:id' element={<EditEmployee/>}/>
            <Route path='/employee/details/:id' element={<DetailsEmployee/>}/>
          </Routes>
      </BrowserRouter>
      </div>  
    </div>
  );
}

export default App;
