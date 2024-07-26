import React from "react";
import "./ServicesOffering.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faPenRuler } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';


const ServicesOffering = () => (
  <div className="box">
    <h1 className="title-box">Services Offering</h1>
    <div className="services">
      <div className="service-wrapper">
        <FontAwesomeIcon className="service-icon" icon={faPenRuler} />
        <p className="service-title">UI/UX Design</p>
      </div>
      <div className="service-wrapper">
        <FontAwesomeIcon className="service-icon" icon={faCode} />
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
