import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Service.css";

const Service = ({ service }) => {
  // const {service} = props;
  const { id, title, Description, logo } = service;
  return (
    <Card style={{ width: "18rem" }} className="service m-3 pt-2 shadow" border="primary"> 
      <Card.Img variant="top" src={logo} style={{height: '262px'}}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{Description}</Card.Text>
        <Link to={`/detail/${id}`}>
        <Button variant="primary">See More...</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Service;
