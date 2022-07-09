import React from "react";
import { CartItem } from "../../index";
import { Box, Divider } from "@chakra-ui/react";

const CartItemList = ({ productsAdded }) => {
  console.log(productsAdded);

  let products = [];

  productsAdded.forEach((i) => {
    products.push(i);
  });

  console.log(products);

  return (
    <Box>
      {products.map((p) => { // BUG IN THIS LOOP - ARRAY INSIDE ARRAY
        return <CartItem key={p.id} {...p} />;
      })}
    </Box>
  );
};

export default CartItemList;
