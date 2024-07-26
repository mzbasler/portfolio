import React from "react";
import "./WorkWithMe.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const WorkWithMe = () => (
  <div className="work-with-me box">
    <h2 className="title-box">Work with Me</h2>
    <div className="callToAction">
      <p className="work-description">All projects</p>
      <FontAwesomeIcon icon={faArrowRight} className="icon" />
    </div>
  </div>
);

export default WorkWithMe;
