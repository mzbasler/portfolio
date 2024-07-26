import React from "react";
import "./SkillsTools.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFigma } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';


const SkillsTools = () => (
  <div className="box">
    <h2 className="title-box">Skills & Tools</h2>
    <div>
      <div className="skills-wrapper">
        <p className="skills">UX/UI Design</p>
        <p className="skills">Front-end Development</p>
      </div>
      <div className="tools-wrapper">
        <FontAwesomeIcon className="tools-icon" icon={faFigma} />
        <FontAwesomeIcon className="tools-icon" icon={faHtml5} />
        <FontAwesomeIcon className="tools-icon" icon={faCss3} />
        <FontAwesomeIcon className="tools-icon" icon={faBootstrap} />
        <FontAwesomeIcon className="tools-icon" icon={faReact} />
      </div>
    </div>
  </div>
);

export default SkillsTools;
