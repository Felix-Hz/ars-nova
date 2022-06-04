// -------- IMPORTS --------
import React from "react";
import { Item, RightNav, LeftNav } from "../../index";
import { Box, Flex, Heading, Text, Divider } from "@chakra-ui/react";

// -------- CSS IMPORTS --------
import "./ItemList.css";

const ItemList = ({ products }) => {
  return (
    <Flex
      className="item-list-container"
      w="100%"
      justifyContent="space-between"
      alignContent="center"
      p="35px 190px"
    >
      <LeftNav props={{ ...products }} />
      <Flex
        className="list-container"
        overflow="hidden"
        width="50%"
        gap="50px"
        wrap="wrap"
        alignItems="center"
        justifyContent="space-between"
        alignContent="center"
        flex="0 1 auto"
        minH="0"
      >
        {products.map((p) => (
          <Item className="item-card" key={p.id} {...p} />
        ))}
      </Flex>
      <RightNav />
    </Flex>
  );
};

export default ItemList;
