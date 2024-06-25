import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from './Components/Navbar';
import Footer from './Components/footer';
import About from './Components/about';
import Partner from './Components/partner';
import Destination from './Components/dest';
import ContactFrm from './Components/contct';
import LoginPage from './Components/login';
import TodoList from './Components/todo';
import Home from './Components/Home';
import SignUp from './Components/signup/signup';
import Login from './Components/login/login';

function App() {
  return ( 
      <>
        <Navbar />
        <div style={{ paddingTop: '70px' }}>
          <Routes>
            <Route exact path="/" element={<Home />} /> 
            <Route path="/partners" element={<Partner />} />
            <Route path="/destinations" element={<Destination />} />
            <Route path="/contact" element={<ContactFrm />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/todo" element={<TodoList />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </>
  );
}

export default App;
