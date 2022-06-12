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
        {/* {products.map((i) => {
          <Box>
            <Text>{i.type}</Text>
            <Divider />
          </Box>;
        })} */}
        <Link to="/category/weapons">Weapons</Link>
        <Divider />
        <Link to="/category/helmets">Helmets</Link>
        <Divider />
        <Link to="/shop">All products</Link>
        <Divider />

      </Flex>
      <Flex direction="column" gap="8px">
        <Heading as="h3" size="md">
          Programming languages
        </Heading>
        <Divider />
        <Link to="https://www.javascript.com/">JavaScript</Link>
        <Divider />
        <Link to="https://solidity-es.readthedocs.io/es/latest/">Solidity</Link>
        <Divider />
        <Link to="https://www.rust-lang.org/es">Rust</Link>
        <Divider />
        <Link to="https://www.python.org/">Python</Link>
        <Divider />
      </Flex>
    </Flex>
  );
};

export default LeftNav;
