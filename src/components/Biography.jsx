import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import "./Biography.scss";
import profileImage from '../img/profile.jpg'; // Caminho relativo para a imagem

const Biography = () => (
  <div className="biography box">
    <img
      className="profile-picture"
      src={profileImage}
      alt="Profile"
    />
    <h2 className="name">
      Maurício<br/>Zancanaro<br/>Basler
    </h2>
    <div className="callToAction">
      Biography
      <FontAwesomeIcon icon={faArrowRight} className="icon" />
    </div>
  </div>
);

export default Biography;
