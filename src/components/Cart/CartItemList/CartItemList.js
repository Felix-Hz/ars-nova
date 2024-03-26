import React from "react";
import { CartItem } from "../../index";
import { Box, Divider } from "@chakra-ui/react";

import "./CartItemList.css";

const CartItemList = ({ productsAdded }) => {
  // console.log(productsAdded);
  let products = [];

  productsAdded.forEach((nestedArray) => {
    nestedArray.forEach((array) => {
      products.push(array);
    });
  });

  // console.log(products);

  return (
    <Box className="cart-item-list-container">
      {products.map((p, index) => {
        return (
          <Box key={p.id} className="box-item-list">
            <CartItem key={p.id} {...p} />
            {products.length !== 1 && index !== products.length - 1 && (
              <Divider className="item-list-divider" />
            )}
          </Box>
        );
      })}
    </Box>
  );
};

export default CartItemList;
