//import logo from './logo.svg';
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';
  
import './App.css';


import HomePage from './components/Home';
import StudentPage from './components/StudentPage';
import AddStudentComponent from './components/NewStudentPage';
import HomePageComponent from './components/Home';
import RegistrationPage from './components/RegistrationPage';
import EmployeeDetails from './components/EmployeeDetails';
import DetailsEmployee from './components/DetailsEmployeePage';
import CreateEmployee from './components/CreateEmployeePage';
import EditEmployee from './components/EditEmployeePage';
import GenderSelection from './components/Gender';
import Login from './components/LoginPage';
import { ToastContainer, toast } from 'react-toastify';










function App() {
  return (
    <div className="App">
       
      <h3 className='text-secondary' style={{textAlign: 'center'}}>Welcome to Sample MERN Project</h3>

            
      <div className='container-fluid'>

      <BrowserRouter>
          <Routes>
            <Route  path='/' element={<Login/>}/>
            {/* <Route path='/LoginPage' element={<Login/>}/> */}
            <Route exact path='/Home' element={<HomePageComponent/>}/>
           {/* <ProtectedRoute path='/Home'><HomePageComponent/></ProtectedRoute> */}
            <Route path='/StudentPage' element={<StudentPage/>}/>
            <Route path='/NewStudentPage' element={<AddStudentComponent/>}/>
            <Route path='/RegistrationPage' element={<RegistrationPage/>}/>
            <Route path='/EmployeeDetails' element={<EmployeeDetails/>}/>
            <Route path='/employees/create' element={<CreateEmployee/>}/>
            <Route path='/employees/edit/:id' element={<EditEmployee/>}/>
            <Route path='/employees/details/:id' element={<DetailsEmployee/>}/>


            

          </Routes>
      </BrowserRouter>
      </div>  
    </div>
  );
}

export default App;
