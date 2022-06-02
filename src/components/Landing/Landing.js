import React from "react";
import characterImage from "../../images/landing.png";
import "./Landing.css";

const Landing = (props) => {
  return (
    <div className="landing-container">
      <div>
        <h1 className="greeting">{props.greeting}</h1>
        <h3 className="subtitle">
          {props.subtitle} Click{" "}
          <a
            href="https://www.youtube.com/watch?v=mCdA4bJAGGk"
            style={{ fontWeight: "600" }}
            className="rick-astley"
          >
            here
          </a>{" "}
          to see more.
        </h3>
      </div>
      <img
        src={characterImage}
        className="character-image"
        alt="character-image"
      ></img>
    </div>
  );
};

export default Landing;
