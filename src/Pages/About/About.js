import React from "react";
import "./About.css";
import about from "../../Images/home-2.png";

const About = () => {
  return (
    <div>
      <div className="image">
        <div className="text">
          <h1 style={{ fontWeight: "bolder", fontSize: "60px" }}>About Us</h1>
          <p style={{ fontSize: "20px" }}>
            MedQuick System for Health is a leading academic health system
            dedicated to improving the health of the people and diverse
            communities we serve.
          </p>
        </div>
      </div>

      <div className="container" style={{ textAlign: "left" }}>
        <p style={{ fontWeight: "bold", fontSize: "20px" }} className="mt-3">
          {" "}
          <img src={about} alt="" style={{ height: "30px" }} /> About Us
        </p>

        <p className="my-5" style={{ fontSize: "18px", fontWeight:'normal' }}>
          Quickmed System for Health is consistently recognized for our
          outstanding patient care, education, research and community
          partnerships. Learn more about our mission, history, policies and
          leadership.
        </p>

        <h1 style={{fontWeight:'bold'}}>About our system</h1>
        <p style={{fontWeight:'normal'}}>
          Driven by discovery, innovation and a deep responsibility for the
          health of our communities, Quickmed is a national leader in outstanding
          patient care, education, research, community partnerships and
          empowering a new generation of health care providers. Quickmed comprises
          Quickmed University Medical Center, Quickmed Medical Center, Quickmed Oak
          Park Hospital and Quickmed University, as well as an extensive providers
          network and numerous outpatient care facilities.
        </p>
        <h1 style={{fontWeight:'bold'}}> History</h1>
        <p style={{fontWeight:'normal'}}>
        Quickmed System for Health has a long history with roots that began more than 180 years ago. Today, we have re-established the Quickmed name to refer to all of our entities.
        </p>
        <p style={{fontWeight:'normal'}}>
        The Quickmed System provides a single brand of health care, with hospitals in Aurora (Quickmed Copley Medical Center), Chicago (QUickmed University Medical Center), Oak Park (Quickmed Oak Park Hospital) and more than 30 clinical locations across the Chicago area.
        </p>

        <h1 style={{fontWeight:'bold'}}>Our Mission</h1>
        <p style={{fontWeight:'normal'}}>
        The mission of Quickmed is to improve the health of the individuals and diverse communities we serve through the integration of outstanding patient care, education, research and community partnerships.
        </p>

        <h1 style={{fontWeight:'bold'}}>Our Vision</h1>
        <p style={{fontWeight:'normal'}}>
        Quickmed will be the leading academic health system in the region and nationally recognized for transforming health care.
        </p>

        <h1 style={{fontWeight:'bold'}}>Our Policy</h1>
        <p style={{fontWeight:'normal'}}>
        Quickmed's core values — innovation, collaboratcion, accountability, respect and excellence — are the roadmap to our mission and vision.

        </p>
        <p style={{fontWeight:'normal'}}>These five values, known as our I CARE values, convey the philosophy behind every decision Quickmed employees make. Quickmed employees also commit themselves to executing these values with compassion. This translates into a dedication — shared by all members of the Quickmed community — to providing the highest quality patient care.</p>
      </div>
    </div>
  );
};

export default About;
