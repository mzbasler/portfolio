import React from "react";
import "./Biography.scss";

const Biography = () => (
  <div className="biography">
    <img
      src="https://via.placeholder.com/150"
      alt="Profile Picture"
      style={{
        width: "150px",
        height: "150px",
        borderRadius: "50%",
        objectFit: "cover",
      }}
    />
    <h2>Maurício Zancanaro Basler</h2>
    <p>Biography</p>
  </div>
);

export default Biography;
