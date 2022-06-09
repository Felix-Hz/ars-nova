// -------- IMPORTS --------
import React, { useEffect, useState } from "react";
import { ItemList, listProducts } from "../../index";

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
    <div className="item-list-father-container">
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
