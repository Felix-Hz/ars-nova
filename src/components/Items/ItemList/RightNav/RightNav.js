import React from "react";
import { Flex, Heading, Text, Divider } from "@chakra-ui/react";

const RightNav = () => {
  return (
    <Flex direction="column" w="10%">
      <Flex direction="column" gap="4px">
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

export default RightNav;
