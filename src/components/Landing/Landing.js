import React from "react";
// import characterImage from "/images/landing.png/";
import "./Landing.css";
import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  Button,
  Text,
} from "@chakra-ui/react";

const Landing = (props) => {
  return (
    <Flex
      className="landing-container"
      justifyContent="space-around"
      alignItems="center"
      p="80px"
      mb="10px"
    >
      <Box>
        <Heading
          as="h1"
          className="greeting"
          fontFamily={("Caudex", "serif")}
          size="4xl"
        >
          {props.greeting}
        </Heading>
        <Heading as="h3" className="subtitle" size="xl" fontWeight="400">
          {props.subtitle} Our{" "}
          <Link
            href="https://www.youtube.com/watch?v=mCdA4bJAGGk"
            fontWeight="600"
            className="rick-astley"
          >
            Medieval Fair
          </Link>{" "}
          is full with NFTs that you can't miss!
        </Heading>
        <Box className="btn-explore">
          <Link href="/shop">
            <Button p="8" bgColor="#e0ff00">
              <Text fontSize="xl">Claim yours now!</Text>
            </Button>
          </Link>
        </Box>
      </Box>
      <Image
        src={process.env.PUBLIC_URL + "/images/landing.png"}
        className="character-image"
        maxH="650px"
        alt="character-image"
      ></Image>
    </Flex>
  );
};

export default Landing;
