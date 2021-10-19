import React from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import care1 from '../../../Images/care-1.PNG';
import care2 from '../../../Images/care-2.PNG';
import care3 from '../../../Images/care-3.PNG';

const Special = () => {
  return (
    <div classNameName="container">
      <h1 className="text-primary mt-5 mb-5">Care when you need it, where you need it.</h1>
      <div style={{ margin: '10px'}} className="row container">
      <div className="card mb-3 me-3" style={{maxWidth: "520px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={care1} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Vaccine Information</h5>
        <p className="card-text">Find the latest information about the COVID-19 vaccine, including who Quickmed is currently distributing the vaccine to.</p>
        <a href="#" className="btn btn-warning">Covid-19 Vaccine Updates</a>
      </div>
      
    </div>
  </div>
</div>

<div className="card mb-3 " style={{maxWidth: "520px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={care2} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Rush On Demand</h5>
        <p className="card-text">Get quick care without an appointment for common conditions and everyday health concerns with Rush On Demand. We have many convenient ways to see a provider, including online virtual visits.</p>
        <a href="#" className="btn btn-warning">Get Care Today</a>
      </div>
    </div>
  </div>
</div>

<div className="card mb-3" style={{maxWidth: "520px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={care3} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Same-day Appointments</h5>
        <p className="card-text">For primary care & selected specialties, see provider schedules & make your own appointment online, even if you’re new to Rush.</p>
        <a href="#" className="btn btn-warning">Schedule Online</a>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default Special;
