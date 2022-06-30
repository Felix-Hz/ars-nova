import React from "react";
import { CartItem } from "../../index";
import { Box, Divider } from "@chakra-ui/react";

const CartItemList = ({ productsAdded }) => {
  return (
    <Box>
      {productsAdded.map((p) => (
        <Divider key={p.id}>
          <CartItem key={p.id} {...p} />
        </Divider>
      ))}
    </Box>
  );
};

export default CartItemList;
