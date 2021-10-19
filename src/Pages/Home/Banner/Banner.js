import React from "react";
import "./Banner.css";
import banner from "../../../Images/banner.jpg";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero-image" 
    // style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('+banner+')'}}
    >
      <div className="hero-text" >
        <h1 style={{fontSize: '70px', width:"70%", paddingBottom:"50px"}}>We are here for you </h1>
        <Link to="/schedule">
        <Button variant="primary" className="p-3" style={{fontWeight: "bold", fontSize: "18px"}}>Schedule your appointment now</Button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
