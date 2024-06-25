// import React,{ useRef } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import "../Styles/main.css";
// import Img from './logo.png';

// function Navbar() {
// 	const navRef = useRef();

// 	const showNavbar = () => {
// 		navRef.current.classList.toggle(
// 			"responsive_nav"
// 		);
// 	};

// 	return (
// 		<header>	
//             <img style={{backgroundColor:"transparent",paddingTop:'10px'}} src={Img} alt="logo"/> 
// 			<h3></h3><h3></h3><h3></h3><h3></h3><h3></h3><h3></h3><h3></h3><h3></h3><h3></h3><h3></h3><h3></h3><h3></h3><h3></h3><h3></h3><h3></h3><h3></h3><h3></h3><h3></h3><h3></h3><h3></h3><h3></h3><h3></h3><h3></h3><h3></h3><h3></h3><h3></h3><h3></h3><h3></h3><h3></h3><h3></h3><h3></h3><h3></h3><h3></h3><h3></h3><h3></h3><h3></h3><h3></h3><h3></h3><h3></h3><h3></h3><h3></h3><h3></h3><h3></h3><h3></h3><h3></h3><h3></h3><h3></h3><h3></h3><h3></h3><h3></h3><h3></h3><h3></h3><h3></h3><h3></h3><h3></h3><h3></h3><h3></h3><h3></h3>
// 			<nav ref={navRef}>
// 				<a href="/#">Home</a>
// 				<a href="/#">About</a>
// 				<a href="/#">Partners</a>
// 				<a href="/#">Places</a>
// 				<a href="/#">Contact Us</a>
// 				<button
// 					className="nav-btn nav-close-btn"
// 					onClick={showNavbar}>
// 					<FaTimes />
// 				</button>
// 			</nav>
// 			<button
// 				className="nav-btn"
// 				onClick={showNavbar}>
// 				<FaBars />
// 			</button>
// 		</header>
		
// 	);
// }

// export default Navbar;




import React, { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../Styles/main.css';
import Img from './logo.png';

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  return (
    <header>
      <img style={{ backgroundColor: 'transparent', paddingTop: '10px' }} src={Img} alt="logo" />
      <nav ref={navRef}>
        <Link to="/" onClick={showNavbar}>Home</Link>
        <Link to="/partners" onClick={showNavbar}>Partners</Link>
        <Link to="/destinations" onClick={showNavbar}>Destinations</Link>
        <Link to="/contact" onClick={showNavbar}>Contact</Link>
        <Link to="/signup" onClick={showNavbar}>SignUp</Link>
        <Link to="/login" onClick={showNavbar}>Login</Link>
        <Link to="/todo" onClick={showNavbar}>Todos</Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
