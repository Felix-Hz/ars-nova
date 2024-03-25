// -------- IMPORTS --------
import React from "react";
import { Item, LeftNav } from "../../index";
import { Flex, Grid, GridItem } from "@chakra-ui/react";

// -------- CSS IMPORTS --------
import "./ItemList.css";

const ItemList = ({ products }) => {
  return (
    <Flex
      className="item-list-container"
      w="80%"
      h="auto"
      justifyContent="space-evenly"
      alignContent="center"
    >
      <LeftNav {...products} />
      <Grid w='75%' templateColumns="1fr 1fr 1fr 1fr" gap="6px" h="auto">
        {products.map((p) => (
          <GridItem key={p.id} h="auto">
            <Item className="item-card" {...p} />
          </GridItem>
        ))}
      </Grid>
    </Flex>
  );
};

export default ItemList;
