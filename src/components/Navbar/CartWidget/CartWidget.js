import React, { useContext } from "react";
import CartContext from "../../../context/CartContext";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Box, Flex, Heading, Image, Link } from "@chakra-ui/react";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  // const totalQuantity = getCartQty();

  return (
    <div>
      <Flex gap="4px">
        <AiOutlineShoppingCart size={24} />
        {totalQuantity}
      </Flex>
    </div>
  );
};

export default CartWidget;
