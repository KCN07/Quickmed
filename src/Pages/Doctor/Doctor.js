import React from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Doctor = ({ doctor }) => {
  const {id, name, img, expertize, Phone } = doctor;


  return (
    <Card style={{ width: "18rem" }} className='col-lg-4 col-sm-6 col-12 shadow m-3 pt-2'>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title style={{fontSize: '18px', fontWeight:'bold'}}>{name}</Card.Title>
        <Card.Text style={{fontWeight:'bold', fontSize:'13px'}}>
          {expertize}
        </Card.Text>
        <Link to={`/appointment/${id}`}>
        <Button variant="warning" className='px-4'>Make an appointment</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Doctor;
