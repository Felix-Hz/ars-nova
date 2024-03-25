import React from "react";
import {
  Flex,
  Heading,
  Divider,
  Stack,
  InputGroup,
  Input,
  InputRightElement,
  Box,
} from "@chakra-ui/react";
import "./LeftNav.css";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

const LeftNav = ({ products }) => {
  return (
    <Flex
      direction="column"
      w="17%"
      mt="5"
      className="leftnav-father-container"
    >
      <Box className="leftnav-container">
        {/* Search bar */}
        <Stack className="searchbar-container" mb="6">
          <InputGroup>
            <Input
              type="search"
              className="searchbar"
              placeholder="The quest for meaning."
              borderRadius="8px"
              w="550px"
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

        {/* Categories */}
        <Flex direction="column" className="categories-container" gap="8px">
          <Heading as="h3" size="md">
            Categories
          </Heading>
          <Divider />
          <Link to="/shop">All products</Link>
          <Divider />
          <Link to="/category/clothes">Clothes</Link>
          <Divider />
          <Link to="/category/helmets">Helmets</Link>
          <Divider />
          <Link to="/category/shields">Shields</Link>
          <Divider />
          <Link to="/category/weapons">Weapons</Link>
          <Divider />
        </Flex>
      </Box>
    </Flex>
  );
};

export default LeftNav;
