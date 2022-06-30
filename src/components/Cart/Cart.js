import { useState, useContext } from "react";
import CartContext from "../../context/CartContext";
import { CartItemList } from "../index";

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
  const { cart, totalQuantity, getTotal, clearCart } = useContext(CartContext);

  const total = getTotal();

  const ids = [];

  cart.forEach((array) => {
    array.forEach((product) => {
      ids.push(product.id);
    });
  });

  const collectionRef = collection(db, "products");

  getDocs(query(collectionRef, where(documentId(), "in", ids)))
    .then((response) => {
      response.docs.forEach((doc) => {
        const dataDoc = doc.data();

        const prod = cart.find((prod) => prod.id === doc.id);

        const prodQuantity = prod.quantity;

        if (dataDoc.quantity > prodQuantity) {
          console.log("Hay producots que no tienen stock");
        }
      });
    })
    .then(({ id }) => {
      console.log(`Your order has been created succesfully. Order ID: ${id}`);
      clearCart();
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setLoading(false);
    });

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

  if (totalQuantity === 0) {
    return <Heading as="h1">The cart is empty.</Heading>;
  }

  return (
    <>
      <Heading as="h1">Cart</Heading>
      <CartItemList productsAdded={cart} />
      <Heading as="h3">Total: ${total}</Heading>
      <Button onClick={() => clearCart()}>Clear cart</Button>
    </>
  );
};

export default Cart;
