import React, { useEffect, useState } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div id="services" className="mb-5">
      <div className="services-container ">
        <h1 className="text-primary mt-5">Our services</h1>
        <div className="service-container container row row-cols-3">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
      <Card style={{ width: "18rem" ,  height: "55%", marginTop: "110px"}}  border="primary">
        
        <Card.Body>
          <Card.Title style={{fontSize:"40px"}} className="text-primary">Departments</Card.Title>
          <Card.Text style={{fontSize:'20px'}}>
            There are various department in QuickMed. Patients don't need to go anywhere except us. we are always ready for accepting patients in any dept. Please check the following list: 
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush" >
          <ListGroupItem style={{border: "1px solid blue", margin:'3px', fontWeight:'bold'}}>Critical Care Medicine</ListGroupItem>
          <ListGroupItem style={{border: "1px solid blue", margin:'3px', fontWeight:'bold'}}>Cardiology</ListGroupItem>
          <ListGroupItem style={{border: "1px solid blue", margin:'3px', fontWeight:'bold'}}>Gastrology</ListGroupItem>
          <ListGroupItem style={{border: "1px solid blue", margin:'3px', fontWeight:'bold'}}>ENT</ListGroupItem>
          <ListGroupItem style={{border: "1px solid blue", margin:'3px', fontWeight:'bold'}}>Neurology</ListGroupItem>
          <ListGroupItem style={{border: "1px solid blue", margin:'3px', fontWeight:'bold'}}>Internal Medicine</ListGroupItem>
          <ListGroupItem style={{border: "1px solid blue", margin:'3px', fontWeight:'bold'}}>General Surgery</ListGroupItem>
        </ListGroup>
        
      </Card>
    </div>
  );
};

export default Services;
