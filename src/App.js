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
import DeleteEmployee from './components/DeleteEmployeePage';
import GenderSelection from './components/Gender';









function App() {
  return (
    <div className="App">
       
      <h3 className='text-secondary' style={{textAlign: 'center'}}>Welcome to Sample MERN Project</h3>

            
      <div className='container-fluid'>

      <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<HomePageComponent/>}/>
            <Route exact path='/Home' element={<HomePageComponent/>}/>
            <Route path='/StudentPage' element={<StudentPage/>}/>
            <Route path='/NewStudentPage' element={<AddStudentComponent/>}/>
            <Route path='/RegistrationPage' element={<RegistrationPage/>}/>
            <Route path='/EmployeeDetails' element={<EmployeeDetails/>}/>
            <Route path='/employees/create' element={<CreateEmployee/>}/>
            <Route path='/employees/edit/:id' element={<EditEmployee/>}/>
            <Route path='/employees/details/:id' element={<DetailsEmployee/>}/>
            <Route path='/employees/delete/:id' element={<DeleteEmployee/>}/>


            

          </Routes>
      </BrowserRouter>
      </div>  
    </div>
  );
}

export default App;
