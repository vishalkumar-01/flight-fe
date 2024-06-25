import React from "react";
import '../Styles/about.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dwn from '../assets/download.jpeg';
function About(){
    return(

    <div className="container" >
      <div className="wrapper">
        <div className="row">
          <div className="col-md-6">
            <div className="feature-box">
              <h1 id="about" style={{fontWeight:'bold ',fontFamily:'Times New Roman,Italic'}}>About Fly Emirates</h1>
              <p>Emirates is the world's largest international airline, flying to 158 destinations in 85 countries. Emirates operates 269 aircraft and is the world's 
                largest operator of the Airbus A380 and Boeing 777 family of aircraft.</p>
              <a href="#" className="btn-One">Read More</a>
              <a href="#" className="btn-One">Contact Us</a>
            </div>
          </div>
          <div className="col-md-5">
            <img src={Dwn} className="feature-img" alt="Feature" />
          </div>
        </div>
      </div>
    </div>


    );
}
export default About;