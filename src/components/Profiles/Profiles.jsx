import React from "react";
import "./Profiles.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Profiles = () => (
  <div className="box">
    <h1 className="title-box">Profiles</h1>
    
    <div className="profile-icons-wrapper">
      <div>
        <FontAwesomeIcon className="profile-icons" icon={faBehance} />
        <FontAwesomeIcon className="profile-icons" icon={faGithub} />
        <FontAwesomeIcon className="profile-icons" icon={faInstagram} />
      </div>
    </div>
  </div>
);

export default Profiles;
