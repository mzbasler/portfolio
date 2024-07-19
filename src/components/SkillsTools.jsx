import React from "react";
import "./SkillsTools.scss";

const SkillsTools = () => (
  <div className="skills-tools">
    <h2>Skills & Tools</h2>
    <div className="d-flex justify-content-between">
      <div className="skill">
        <img
          src="https://via.placeholder.com/40"
          alt=""
          style={{
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </div>
      <div className="skill">
        <img
          src="https://via.placeholder.com/40"
          alt=""
          style={{
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </div>
      <div className="skill">
        <img
          src="https://via.placeholder.com/40"
          alt=""
          style={{
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </div>
      <div className="skill">
        <img
          src="https://via.placeholder.com/40"
          alt=""
          style={{
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </div>
      <div className="skill">
        <img
          src="https://via.placeholder.com/40"
          alt=""
          style={{
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
    <div className="d-flex justify-content-between">
      <div className="skill">
        <p>Html</p>
      </div>
      <div className="skill">
        <p>Css</p>
      </div>
      <div className="skill">
        <p>JavaScript</p>
      </div>
      <div className="skill">
        <p>React</p>
      </div>
      <div className="skill">
        <p>Node</p>
      </div>
    </div>
  </div>
);

export default SkillsTools;
