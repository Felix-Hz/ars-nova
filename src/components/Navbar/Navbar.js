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

// ------- ICONS --------
import { AiOutlineSearch } from "react-icons/ai";

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
      <Stack className="searchbar-container">
        <InputGroup>
          <Input
            type="search"
            className="searchbar"
            placeholder="The quest for meaning."
            borderRadius="8px"
            w="520px"
            size="md"
            p="7px"
            border="solid 0.1px"
            _focus={{ outline: "none" }}
            variant="filled"
          />
          <InputRightElement
            children={<AiOutlineSearch className="search-icon" />}
            top="9px"
            h="20px"
          />
        </InputGroup>
      </Stack>
      <Flex
        className="navbar-list-container"
        justifyContent="space-between"
        alignItems="center"
        alignContent="center"
        gap="30px"
        p="10px"
      >
        {/* <Box className="navbar-explore">
          <Link to="/count">
            <Text fontSize="lg" className="explore-text">
              Count to Infinity
            </Text>
          </Link>
        </Box> */}
        <Box className="navbar-explore">
          <Link to="/shop">
            <Text fontSize="lg" className="explore-text">
              Explore
            </Text>
          </Link>
        </Box>
        <Box className="navbar-wallet">
          <Link to="/">
            <Button p="15px" bgColor="#e0ff00">
              <Text fontSize="md">Connect to Wallet</Text>
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
