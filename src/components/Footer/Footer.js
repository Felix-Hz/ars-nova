import React from "react";

// CSS IMPORTS
import "./Footer.css";
import "../../Pallette.css";

import { Box, Heading } from "@chakra-ui/react";

// ICON IMPORTS
import { VscGithubInverted, VscTwitter } from "react-icons/vsc";
import { BsLinkedin } from "react-icons/bs";
import { GiMoebiusTriangle } from "react-icons/gi";

const Footer = () => {
  return (
    <Box className="footer-container">
      <Box className="footer-text-container">
        <Heading as="h4" size="xs" className="footer-text">
          Ars Nova was made with ⚡ and 💙 by Félix{" "}
        </Heading>
      </Box>
      <Box className="footer-triangle-container">
        <GiMoebiusTriangle size={8} />
      </Box>
      <Box className="social-icons-container">
        <a href="https://github.com/Felix-Hz">
          <VscGithubInverted size={25} />
        </a>
        <a href="https://twitter.com/_anyhow_">
          <VscTwitter size={25} />
        </a>
        <a href="https://www.linkedin.com/in/felix-hernandez-vieyra/">
          <BsLinkedin size={25} />
        </a>
      </Box>
    </Box>
  );
};

export default Footer;
