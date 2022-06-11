// -------- IMPORTS --------
import React, { useEffect, useState } from "react";
import { ItemList, listProducts } from "../../index";
import { Box } from "@chakra-ui/react";

// -------- CSS IMPORTS --------
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  // after component has been mounted
  useEffect(() => {
    listProducts().then((res) => {
      setProducts(res);
    });
  }, []);

  return (
    <Box className="item-list-father-container">
      <ItemList products={products} />
    </Box>
  );
};

export default ItemListContainer;
