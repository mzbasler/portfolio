import React from "react";
import "./ServicesOffering.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ServicesOffering = () => (
  <div className="box">
    <h1 className="title-box">Services Offering</h1>
    <div>
      <div>
        <img
          src="https://via.placeholder.com/80"
          alt=""
        />
        <p>UI/UX Design</p>
      </div>
      <div>
        <img
          src="https://via.placeholder.com/80"
          alt=""
        />
        <p className="service-title">Web Development</p>
      </div>
    </div>
    <div className="callToAction">
      <p className="work-description">All projects</p>
      <FontAwesomeIcon icon={faArrowRight} className="icon" />
    </div>
  </div>
);

export default ServicesOffering;
