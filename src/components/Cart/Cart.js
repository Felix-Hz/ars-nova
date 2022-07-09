import { useState, useContext } from "react";
import CartContext from "../../context/CartContext";
import { CartItemList } from "../index";

import { useNavigate } from "react-router-dom";

import { Box, Button, Heading, Spinner } from "@chakra-ui/react";

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

  console.log(ids);

  const collectionRef = collection(db, "products");

  if (ids.length > 0) {
    getDocs(query(collectionRef, where(documentId(), "in", ids)))
      .then((response) => {
        response.docs.forEach((doc) => {
          const dataDoc = doc.data();

          const prod = cart.find((prod) => prod.id === doc.id);
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
      <Heading as="h1" p="200px">
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
    <>
      <Heading as="h1">Cart</Heading>
      <CartItemList productsAdded={cart} />
      <Heading as="h3">Total: ${total}</Heading>
      <Button onClick={() => clearCart()}>Clear cart</Button>
      <Button onClick={() => navigateCheckoutForm()}>Go to checkout</Button>
    </>
  );
};

export default Cart;
