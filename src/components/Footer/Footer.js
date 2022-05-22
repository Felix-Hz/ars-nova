import React from "react";

// ICON IMPORTS
import { VscGithubInverted, VscTwitter } from "react-icons/vsc";
import { BsLinkedin } from "react-icons/bs"

const Footer = () => {
  return (
    <div className="footer-container">
      <h4>Ars Nova was made with ⚡ and 💙 by Félix </h4>
      <div className="social-icons-container">
        <VscGithubInverted />
        <VscTwitter />
        <BsLinkedin />
      </div>
    </div>
  );
};

export default Footer;
