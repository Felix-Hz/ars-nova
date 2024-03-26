import { useState, useContext } from "react";
import CartContext from "../../context/CartContext";
import { CartItemList } from "../index";
import { useNavigate } from "react-router-dom";
import { Box, Button, Heading, Spinner, Text } from "@chakra-ui/react";

import "./Cart.css";

import {
  collection,
  getDocs,
  query,
  where,
  documentId,
} from "firebase/firestore";

import { db } from "../../services/firebase/index";

const Cart = () => {
  const [loading, setLoading] = useState(false);
  const { cart, getTotal, clearCart } = useContext(CartContext);
  let navigate = useNavigate();

  const total = getTotal();

  const ids = [];

  cart.forEach((array) => {
    array.forEach((product) => {
      ids.push(product.id);
    });
  });


  const collectionRef = collection(db, "products");

  if (ids.length > 0) {
    getDocs(query(collectionRef, where(documentId(), "in", ids)))
      .then((response) => {
        response.docs.forEach((doc) => {
          // const dataDoc = doc.data();
          // const prod = cart.find((prod) => prod.id === doc.id);
        });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  } else {
    return (
      <Heading as="h1" p="200px" className="empty-cart">
        Oops! It seems that your cart is empty.
      </Heading>
    );
  }

  if (loading) {
    return (
      <Box p="370px" textAlign="center">
        <Spinner thickness="5px" speed="0.65s" size="xl" marginBottom="20px" />
        <Heading as="h2" size="md">
          Your order is loading...
        </Heading>
      </Box>
    );
  }

  const navigateCheckoutForm = () => {
    let path = `/checkout`;
    navigate(path);
  };

  return (
    <Box className="cart-container">
      <Box className="cart-item-list">
        <CartItemList productsAdded={cart} />
      </Box>
      <Box className="cart-side-checkout">
        <Text className="price-text">
          <Text className="price-subtitle">Total:</Text> ${total.toFixed(2)}
        </Text>
        <Box className="navigate-checkout-container">
          <p className="checkout-clear" onClick={() => clearCart()}>
            Clear cart
          </p>
          <Button onClick={() => navigateCheckoutForm()}>Go to checkout</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Cart;
