import React from "react";
import "./Biography.scss";
import profileImage from '../../img/profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Biography = () => (
  <div className="box">
    {/*imagem do perfil*/}
    <img
      className="profile-picture"
      src={profileImage}
      alt="Profile"
    />
    {/*nome do perfil*/}
    <h2 className="name">
      Maurício<br/>Zancanaro<br/>Basler
    </h2>
    {/*call to action biografia*/}
    <div className="callToAction">
      <p>Biography</p>
      <FontAwesomeIcon icon={faArrowRight} className="icon" />
    </div>
  </div>
);

export default Biography;
