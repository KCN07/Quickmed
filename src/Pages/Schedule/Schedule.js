import React from "react";
import { Card } from "react-bootstrap";

const Schedule = () => {
  return (
    <div style={{ textAlign: "left" }} className="container py-5">
      <h1
        className="text-primary"
        style={{ fontWeight: "bolder", fontSize: "40px" }}
      >
        Schedule Your Medical Appointment at Quickmed
      </h1>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr'}} className="m-5">
        <Card style={{ width: "23rem" }} className="me-3 mb-3" border="primary">
          <Card.Body>
            <Card.Title className="text-primary" style={{fontSize:"25px"}}>Schedule Online</Card.Title>
            <Card.Text>
            If you’re a new patient, start here. You can see health care providers' schedules and make your own appointment online, for primary care and for selected specialties.
            </Card.Text>
            <p style={{fontWeight: 'bolder'}} className='text-primary'>Call for Appointment: 01823475340 </p>
          </Card.Body>
        </Card>
        <Card style={{ width: "23rem" }} className="me-3 mb-3" border="primary">
          <Card.Body>
            <Card.Title className="text-primary" style={{fontSize:"25px"}}>Schedule Old Patient</Card.Title>
            <Card.Text>
            If you’re a current patient, start here. You can schedule an appointment or get contact information for past providers.
            </Card.Text>
            <p style={{fontWeight: 'bolder'}} className='text-primary'>Call for Appointment: 01967856442</p>
          </Card.Body>
        </Card>
        <Card style={{ width: "23rem" }} className="me-3 mb-3" border="primary">
          <Card.Body>
            <Card.Title className="text-primary" style={{fontSize:"25px"}}>Emmergency Schedule</Card.Title>
            <Card.Text>
            Get quick care without an appointment for common conditions and everyday health concerns with Rush On Demand. We have many convenient ways to see a provider, including online virtual visits.
            </Card.Text>
            <p style={{fontWeight: 'bolder'}} className='text-primary'>Call for Appointment: 01668889043</p>
          </Card.Body>
        </Card>
        <Card style={{ width: "23rem" }} className="me-3 mb-3" border="primary">
          <Card.Body>
            <Card.Title className="text-primary" style={{fontSize:"25px"}}>COVID-19 Testing and vaccination</Card.Title>
            <Card.Text>
            Schedule a COVID-19 test in Chicago or Oak Park based on your symptom history and the severity of your condition.
            </Card.Text>
            <p style={{fontWeight: 'bolder'}} className='text-primary'>Call for Appointment: 01528873909</p>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Schedule;
