import React, { useState, useEffect } from "react";
import { ItemDetail, getProduct } from "../../index";
import { useParams } from "react-router-dom";
import { db } from "../../../services/firebase/index";
import { getDoc, doc } from "firebase/firestore";
import { Spinner, Box, Heading } from "@chakra-ui/react";

const ItemDetailContainer = ({}) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  // returns all url params
  const { itemId } = useParams();

  useEffect(() => {
    const docRef = doc(db, "products", itemId);
    getDoc(docRef)
      .then((doc) => {
        console.log(doc);
        const productFormatted = { id: doc.id, ...doc.data() };
        setProduct(productFormatted);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Box p="370px" textAlign="center">
        <Spinner thickness="5px" speed="0.65s" size="xl" marginBottom="20px" />
        <Heading as="h2" size="md">
          Loading
        </Heading>
      </Box>
    );
  }

  return (
    <div>
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;
