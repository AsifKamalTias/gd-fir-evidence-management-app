import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';

import Home from './pages/Home';
import About from './pages/About'
import UserRegistration from './pages/User/Registration'
import UserList from './pages/User/List'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/user/registration" element={<UserRegistration/>} />
        <Route path="/user/list" element={<UserList/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
