import React from "react";
import { Flex, Heading, Text, Divider, Box } from "@chakra-ui/react";

const LeftNav = ({ products }) => {
  console.log(products)
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
        <Text>Weapons</Text>
        <Divider />
        <Text>Tools</Text>
        <Divider />
        <Text>Leather</Text>
        <Divider />
        <Text>Food</Text>
        <Divider />
      </Flex>
      <Flex direction="column" gap="8px">
        <Heading as="h3" size="md">
          Programming languages
        </Heading>
        <Divider />
        <Text>JavaScript</Text>
        <Divider />
        <Text>Solidity</Text>
        <Divider />
        <Text>Rust</Text>
        <Divider />
        <Text>Python</Text>
        <Divider />
      </Flex>
    </Flex>
  );
};

export default LeftNav;
