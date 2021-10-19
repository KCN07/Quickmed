import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";

const Appointment = (props) => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("/doctors.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  const { dId } = useParams();
  const matched = doctors.find((d) => d.id == dId);

  console.log(matched);
  return (
    <div className=" container m-5" style={{display:"flex", justifyContent:"space-between"}}>
      <div>
        <h2>{matched?.name}</h2>
        <p>{matched.expertize}</p>
        <a className="btn btn-success" href={`tel: ${matched?.phone}`}>
          {" "}
          Call For appointment
        </a>
      </div>
      <img src={matched?.img} alt="" />
    </div>
  );
};

export default Appointment;
