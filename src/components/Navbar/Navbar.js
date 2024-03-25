// ------- IMPORTS --------
import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Input,
  Heading,
  Text,
  Stack,
  Flex,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { CartWidget } from "../index";

// ------- CSS --------
import "./Navbar.css";

const Navbar = () => {
  return (
    <Flex
      className="navbar-container"
      justifyContent="space-between"
      alignItems="center"
      alignContent="center"
      p="15px 30px"
      fontWeight="500"
    >
      <Box className="logo-container">
        <Heading as="h1" className="logo" size="xl">
          <Link to="/" id="logo">
            Ars Nova
          </Link>
        </Heading>
      </Box>
      <Flex
        className="navbar-list-container"
        justifyContent="space-between"
        alignItems="center"
        alignContent="center"
        gap="30px"
        p="10px"
      >
        <Box className="navbar-wallet">
          <Link to="/shop">
            <Button p="15px" bgColor="#e0ff00">
              <Text fontSize="md">Explore</Text>
            </Button>
          </Link>
        </Box>
        <Box className="navbar-cart">
          <Link to="/cart">
            <CartWidget />
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Navbar;
