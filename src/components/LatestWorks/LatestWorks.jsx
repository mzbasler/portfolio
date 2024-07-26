import React from 'react';
import './LatestWorks.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const LatestWorks = () => (
  <div className="box">
    
    <h2 className="title-box">See My Latest Work</h2>

    
    <div className="callToAction">
      <p className="work-description">All projects</p>
      <FontAwesomeIcon icon={faArrowRight} className="icon" />
    </div>
  </div>
);

export default LatestWorks;
