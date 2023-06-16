import logo from './logo.svg';
import { Router , Route, Routes} from 'react-router-dom';
import './App.css';
import Signin from './component/Signin';
import Signup from './component/Signup';
import Forget_password from './component/Forget_password';
import Home from './component/Home';

import Dashboard from './component/Dashboard';
import Patient from './Patient/Patient';
import AllPatients from './Patient/AllPatients';
import Profile from './Patient/Profile';
import Invoice from './Patient/Invoice';
import Adddoctor from './Doctor/Adddoctor';
import Doctor from './Doctor/Doctors';
import Doctorprofile from './Doctor/Doctorprofile';
import Schedule from './Doctor/Schedule';



function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/signin' element={<Signin/>} />
          <Route path="/" element={window.localStorage.getItem('id') !== null ? <Dashboard/> : <Signin/> } />
          <Route path="/dashboard" element={window.localStorage.getItem('id') == null ? <Signin/> : <Dashboard/> } />
          <Route path='/register' element={<Signup/>} />
          {/* <Route path="/Forget_password" element={<Forget_password/>} /> */}
          {/* <Route path="/" element={<Home/>} /> */}
          <Route path="/add-patient" element={<Patient/>} />
          {/* <Route path="/dashboard" element={<Dashboard/>} /> */}
          <Route path="/patients" element={<AllPatients/>} />
          {/* <Route path='/doctor-profile' element={<Profile/>} /> */}
          {/* <Route path='/patients-invoice' element={<Invoice/>} /> */}
          <Route path='/add-doctor' element={<Adddoctor/>} />
          <Route path='/alldoctors' element={<Doctor/>} />
          <Route path='/doctor-profile/:id' element={<Doctorprofile/>} />
          {/* <Route path='/doctor-schedule' element={<Schedule/>} /> */}
      </Routes>
    </>
  );
}

export default App;
