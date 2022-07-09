import React from "react";
import { useContext } from "react";
import CartContext from "../../../context/CartContext";

import {
  Box,
  Button,
  Heading,
  Text,
  Divider,
  Spinner,
} from "@chakra-ui/react";

const CartItem = ({ id, name, quantity, price }) => {
  const { removeItem } = useContext(CartContext);

  const handleRemove = (id) => {
    removeItem(id);
  };

  // console.log(id)
  // console.log(name)
  // console.log(quantity)
  // console.log(price)

  return (
    <Box>
      <Box>
        <Heading as="h2">{name}</Heading>
      </Box>
      <Box>
        <Text>Cantidad: {quantity}</Text>
        <Text>Precio x Unidad: ${price}</Text>
      </Box>
      <Box>
        <Text>Subtotal: ${price * quantity}</Text>
        <Button onClick={() => handleRemove(id)}>X</Button>
      </Box>
    </Box>
  );
};

export default CartItem;
