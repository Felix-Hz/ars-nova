import React, { useState } from "react";
// import CartContext from "../../context/CartContext";

import {
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  FormLabel,
} from "@chakra-ui/react";

import { addDoc, collection } from "firebase/firestore";
import { db } from "../../services/firebase/index";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  // const [loading, setLoading] = useState(false);
  // const { cart, getTotal } = useContext(CartContext);

  const handleCreateOrder = () => {
    console.log("Creando orden...");
    const orderObject = {
      buyer: {
        name: name,
        email: email,
        phone: phone,
        address: address,
      },
      // items: cart, // !!!!!!!!!!!!!!!!  -  Nested array  problem is here
      // total: total,
    };
    const orderCollectionRef = collection(db, "orders");
    addDoc(orderCollectionRef, orderObject).then(({ id }) => {
      // Nested arrays error
      console.log(`La orden ${id} ha sido creada exitosamente`);
    });
    console.log(orderObject);
  };

  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box p={150}>
        <Box m={4} textAlign="left">
          <form>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                id="name"
                name="name"
                onChange={(event) => setName(event.target.value)}
                value={name}
                type="text"
                placeholder="Type your full name"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input
                id="email"
                name="email"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                type="email"
                placeholder="Enter your email"
              />
            </FormControl>
            <FormControl mt={2}>
              <Input
                id="email"
                name="email"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                type="email"
                placeholder="Enter your email again"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Phone</FormLabel>
              <Input
                id="phone"
                name="phone"
                onChange={(event) => setPhone(event.target.value)}
                value={phone}
                type="number"
                placeholder="Phone number"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Address</FormLabel>
              <Input
                id="address"
                name="address"
                onChange={(event) => setAddress(event.target.value)}
                value={address}
                type="text"
                placeholder="Street, Number, Division"
              />
            </FormControl>
            <Button width="full" mt={8} onClick={() => handleCreateOrder()}>
              Purchase your order
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};

export default ContactForm;
