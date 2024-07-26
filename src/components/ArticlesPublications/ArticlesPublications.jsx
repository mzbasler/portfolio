import React from "react";
import "./ArticlesPublications.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ArticlesPublications = () => (
  <div className="articles-publications box">
    <h2 className="title-box">Articles & Publications</h2>
    <div className="callToAction">
      <p>All projects</p>
      <FontAwesomeIcon icon={faArrowRight} className="icon" />
    </div>
  </div>
);

export default ArticlesPublications;
