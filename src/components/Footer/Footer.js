import React from "react";

// CSS IMPORTS
import "./Footer.css";
import "../../Pallette.css";

// ICON IMPORTS
import { VscGithubInverted, VscTwitter } from "react-icons/vsc";
import { BsLinkedin } from "react-icons/bs";
import { GiMoebiusTriangle } from "react-icons/gi";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-text-container">
        <h4>Ars Nova was made with ⚡ and 💙 by Félix </h4>
      </div>
      <div className="footer-triangle-container">
        <GiMoebiusTriangle size={8} />
      </div>
      <div className="social-icons-container">
        <a href="https://github.com/Felix-Hz"><VscGithubInverted size={25} /></a>
        <a href="https://twitter.com/_anyhow_"><VscTwitter size={25} /></a>
        <a href="https://www.linkedin.com/in/felix-hernandez-vieyra/"><BsLinkedin size={25} /></a>
      </div>
    </div>
  );
};

export default Footer;
