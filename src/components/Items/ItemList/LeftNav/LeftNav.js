import React from "react";
import { Flex, Heading, Text, Divider, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const LeftNav = ({ products }) => {
  return (
    <Flex direction="column" gap="25px" w="10%">
      <Flex direction="column" gap="8px">
        <Heading as="h3" size="md">
          Categories
        </Heading>
        <Divider />
        <Link to="/category/weapons">Weapons</Link>
        <Divider />
        <Link to="/category/helmets">Helmets</Link>
        <Divider />
        <Link to="/category/clothes">Clothes</Link>
        <Divider />
        <Link to="/category/shields">Shields</Link>
        <Divider />
        <Link to="/shop">All products</Link>
        <Divider />
      </Flex>

      <Flex direction="column" gap="8px">
        <Heading as="h3" size="md">
          Relevance
        </Heading>
        <Divider />
        <Text>Trending</Text>
        <Divider />
        <Text>Latest arrivals</Text>
        <Divider />
        <Text>Price</Text>
        <Divider />
      </Flex>
    </Flex>
  );
};

export default LeftNav;
