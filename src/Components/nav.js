// import React from "react";
// import '../Styles/nav.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Img from './logo.png';
// import Menu from '../assets/menu.png';
// function Nav(){
//     return(
//         <div class="container" id="conta">
//         <nav class="navbar navbar-expand-lg ">
//             <a class="navbar-brand" href="#" ><img src={Img}/></a>
//             <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//             <img src={Menu  } alt="menu"/>
//             </button>
//             <div class="collapse navbar-collapse" id="navbarNav">
//               <ul class="navbar-nav ml-auto text-right">
//                 <li class="nav-item">
//                   <a class="nav-link" href="#">Home </a>
//                 </li>
//                 <li class="nav-item">
//                   <a class="nav-link" href="#about">About</a>
//                 </li>
//                 <li class="nav-item">
//                   <a class="nav-link" href="#partners">Partners</a>
//                 </li>
//                 <li class="nav-item">
//                   <a class="nav-link" href="#places">Places</a>
//                 </li>
//                 <li class="nav-item">
//                   <a class="nav-link" href="#contact-us">Contact Us</a>
//                 </li>
//               </ul>
//             </div>
//           </nav>
//     </div>
// );
// }
// export default Nav;

import React, { useState } from 'react';
import '../Styles/nav.css';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-brand">
        <a href="/">Your Logo</a>
      </div>
      <button className="navbar-toggler" onClick={toggleNavbar}>
        <span className="navbar-toggler-icon">&#9776;</span>
      </button>
      <div className={`navbar-collapse ${isOpen ? 'show' : ''}`}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="/about">About</a>
          </li>
          <li className="nav-item">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
