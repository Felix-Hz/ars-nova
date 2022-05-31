// -------- IMPORTS --------
import React, { useEffect } from "react";
import { listProducts } from "../../../data/ProductsDB";

// -------- CSS IMPORTS --------
import "./ItemListContainer.css";

const ItemListContainer = () => {
  
  // after component has been mounted 
  useEffect(() => {
    listProducts().then( res => {
      console.log(res);
    })
  }, []);

  return (
    <div>
      <h1>Hola</h1>
    </div>
  );
};

export default ItemListContainer;
