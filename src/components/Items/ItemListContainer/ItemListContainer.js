// -------- IMPORTS --------
import React, { useEffect, useState } from "react";
import { ItemList } from "../../index";
import { Box, Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../../services/firebase";

// -------- CSS IMPORTS --------
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { type } = useParams();

  // after component has been mounted
  useEffect(() => {
    setLoading(true);

    const collectionRef = type
      ? query(collection(db, "products"), where("type", "==", type))
      : collection(db, "products");
    getDocs(collectionRef)
      .then((res) => {
        const productsFormatted = res.docs.map((doc) => {
          // the .data() brings every field after id from Firebase
          return { id: doc.id, ...doc.data() };
        });
        setProducts(productsFormatted);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [type]);

  if (loading) {
    return (
      <Box p="370px" textAlign="center" className="spinner-item-list">
        <Spinner thickness="5px" speed="0.65s" size="xl" marginBottom="20px" />
        <Heading as="h2" size="md">
          Loading
        </Heading>
      </Box>
    );
  }

  return (
    <Box className="shop-container">
      <Box className="item-list-father-container"></Box>
      {/* Products */}
      <ItemList products={products} />
    </Box>
  );
};

export default ItemListContainer;
