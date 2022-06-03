// -------- IMPORTS --------
import React from "react";
import { Item } from "../../index";
import { Box, Flex } from "@chakra-ui/react";

// -------- CSS IMPORTS --------
import "./ItemList.css";

const ItemList = ({ products }) => {
  return (
    <Flex
      className="item-list-container"
      w="100%"
      justifyContent="center"
      alignContent="center"
      alignItems="center"
    >
      <Flex
        className="list-container"
        overflow="hidden"
        width="75%"
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
    </Flex>
  );
};

export default ItemList;
