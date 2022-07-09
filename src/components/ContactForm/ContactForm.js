import React, { useState, useContext } from "react";
import CartContext from "../../context/CartContext";

import { Box, Button, Heading, Spinner } from "@chakra-ui/react";

import { addDoc, collection } from "firebase/firestore";
import { db } from "../../services/firebase/index";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const { cart, getTotal } = useContext(CartContext);

  const handleCreateOrder = () => {
    console.log("Creando orden...");
    const orderObject = {
      buyer: {
        name: "Felix",
        email: "adsf@gmail.com",
        phone: "1154542525",
        address: "Tacuarembó 2525",
      },
      // items: cart, // Nested array is here
      // total: total,
    };
    const orderCollectionRef = collection(db, "orders");
    addDoc(orderCollectionRef, orderObject).then(({ id }) => {
      // Nested arrays error
      console.log(id);
    });
  };

  return <div>ContactForm</div>;
};

export default ContactForm;
