import React from "react";
import { CartItem } from "../../index";
import { Box } from "@chakra-ui/react";

const CartItemList = ({ productsAdded }) => {
  console.log(productsAdded);
  let products = [];

  productsAdded.forEach((nestedArray) => {
    nestedArray.forEach((array) => {
      products.push(array);
    });
  });

  console.log(products);

  return (
    <Box>
      {products.map((p) => {
        // BUG IN THIS LOOP - ARRAY INSIDE ARRAY
        return <CartItem key={p.id} {...p} />;
      })}
    </Box>
  );
};

export default CartItemList;
