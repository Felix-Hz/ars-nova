import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";

const Cart = () => {
  const { totalQuantity } = useContext(CartContext);

  return <div>{totalQuantity}</div>;
};

export default Cart;
