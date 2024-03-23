import React from "react";
import { useContext } from "react";
import CartContext from "../../../context/CartContext";

import "./CartItem.css";

import { Box, Button, Text } from "@chakra-ui/react";

const CartItem = ({ id, name, quantity, price }) => {
  const { removeItem } = useContext(CartContext);

  const handleRemove = (id) => {
    removeItem(id);
  };

  return (
    <Box className="cart-item-container">
      <Box className="item-container">
        <p className="item-name">{name}</p>
        <Box className="item-details-container">
          <Text className="item-details-qty">
            <Text className="detail-subtitle">Cantidad:</Text> {quantity}
          </Text>
          {quantity > 1 ? (
            <Text>
              <Text className="detail-subtitle">Subtotal:</Text> $
              {(price * quantity).toFixed(2)} (${price.toFixed(2)} p.u.)
            </Text>
          ) : (
            <Text>
              <Text className="detail-subtitle">Subtotal:</Text> $
              {(price * quantity).toFixed(2)}
            </Text>
          )}
        </Box>
      </Box>
      <Box className="remove-item">
        <Button onClick={() => handleRemove(id)}>X</Button>
      </Box>
    </Box>
  );
};

export default CartItem;
