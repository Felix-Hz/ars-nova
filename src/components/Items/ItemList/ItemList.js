// -------- IMPORTS --------
import React from "react";
import { Item, RightNav, LeftNav } from "../../index";
import { Flex, Grid, GridItem } from "@chakra-ui/react";

// -------- CSS IMPORTS --------
import "./ItemList.css";

const ItemList = ({ products }) => {
  return (
    <Flex
      className="item-list-container"
      w="100%"
      h="auto"
      justifyContent="space-between"
      alignContent="center"
      p="2% 18%"
    >
      <LeftNav props={{ ...products }} />
      <Grid
        templateColumns="1fr 1fr 1fr 1fr"
        gap="6px"
        // overflow="hidden"
        h="auto"
        // className="list-container"
        // overflow="hidden"
        // width="50%"
        // gap="50px"
        // wrap="wrap"
        // alignItems="center"
        // justifyContent="space-between"
        // alignContent="center"
        // flex="0 1 auto"
        // minH="0"
      >
        {products.map((p) => (
          <GridItem key={p.id} h="auto">
            <Item className="item-card" {...p} />
          </GridItem>
        ))}
      </Grid>
      <RightNav />
    </Flex>
  );
};

export default ItemList;
