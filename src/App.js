import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';

import Home from './pages/Home';
import About from './pages/About'

import UserRegistration from './pages/User/Registration'
import UserList from './pages/User/List'
import UserLogin from './pages/User/Login'
import UserDashboard from './pages/User/Dashboard'
import UserRegisterFIR from './pages/User/RegisterFIR'
import UserRegisterGD from './pages/User/RegisterGD'
import UserEvidence from './pages/User/Evidence'
import UserTrackFIR from './pages/User/TrackFIR'


import PoliceLogin from './pages/Police/Login'
import PoliceDashboard from './pages/Police/Dashboard'
import PoliceRegisterFIR from './pages/Police/RegisterFIR'
import PoliceRegisterGD from './pages/Police/RegisterGD'
import PoliceEvidence from './pages/Police/Evidence'
import PoliceTrackFIR from './pages/Police/TrackFIR'
import PoliceComplaints from './pages/Police/Complaints'


import ForensicLogin from './pages/Forensic/Login'
import ForensicDashboard from './pages/Forensic/Dashboard'
import ForensicEvidence from './pages/Forensic/Evidence'
import ForensicComplaints from './pages/Forensic/Complaints'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />

        <Route path="/user/registration" element={<UserRegistration/>} />
        <Route path="/user/login" element={<UserLogin/>} />
        <Route path="/user/dashboard" element={<UserDashboard/>} />
        <Route path="/user/fir" element={<UserRegisterFIR/>} />
        <Route path="/user/gd" element={<UserRegisterGD/>} />
        <Route path="/user/evidence" element={<UserEvidence/>} />
        <Route path="/user/track/fir" element={<UserTrackFIR/>} />
        <Route path="/user/list" element={<UserList/>} />
        

        
        <Route path="/police/login" element={<PoliceLogin/>} />
        <Route path="/police/dashboard" element={<PoliceDashboard/>} />
        <Route path="/police/fir" element={<PoliceRegisterFIR/>} />
        <Route path="/police/gd" element={<PoliceRegisterGD/>} />
        <Route path="/police/evidence" element={<PoliceEvidence/>} />
        <Route path="/police/track/fir" element={<PoliceTrackFIR/>} />
        <Route path="/police/complaints" element={<PoliceComplaints/>} />
        

        <Route path="/forensic/login" element={<ForensicLogin/>} />
        <Route path="/forensic/dashboard" element={<ForensicDashboard/>} />
        <Route path="/forensic/evidence" element={<ForensicEvidence/>} />
        <Route path="/forensic/complaints" element={<ForensicComplaints/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
