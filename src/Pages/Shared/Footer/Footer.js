import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        textAlign: "center",
        color: "white",
        fontFamily: "serif",
      }}
      className="p-5"
    >
      <h2 className="mb-5">Quickmed | We are here for you.</h2>
      <div>
          <a href="#" style={{textDecoration: "none", color: "white", marginRight: "15px", fontSize:"18px"}}>Disclaimer</a>
          <a href="#" style={{textDecoration: "none", color: "white", marginRight: "15px", fontSize:"18px"}}>Website Privacy</a>
          <a href="#" style={{textDecoration: "none", color: "white", marginRight: "15px", fontSize:"18px"}}>Contact Web Administrator</a>
          <a href="#" style={{textDecoration: "none", color: "white", marginRight: "15px", fontSize:"18px"}}>Nondiscrimination Policy</a>
          <a href="#" style={{textDecoration: "none", color: "white", marginRight: "15px", fontSize:"18px"}}>Equal Employment Opportunity</a>
      </div>
      <p className="m-4">© Copyright 2021 Quickmed Medical Center.</p>

      <p className="container">All physicians featured on this website are on the medical faculty of QuickMed Medical Center, or Renouned Oak Park Hospital. Some of the physicians featured are in private practice and, as independent practitioners.</p>
    </div>
  );
};

export default Footer;
