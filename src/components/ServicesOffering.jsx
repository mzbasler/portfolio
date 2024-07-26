import React from "react";
import "./ServicesOffering.scss";

const ServicesOffering = () => (
  <div className="services-offering box">
    <h2>Services Offering</h2>
    <div className="d-flex justify-content-between">
      <div className="service">
        <img
          src="https://via.placeholder.com/100"
          alt=""
          style={{
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
        <p>UI/UX Design</p>
      </div>
      <div className="service">
        <img
          src="https://via.placeholder.com/100"
          alt=""
          style={{
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
        <p>Web Development</p>
      </div>
    </div>
    <button>All services</button>
  </div>
);

export default ServicesOffering;
