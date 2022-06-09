import React, { useState, useEffect } from "react";
import { ItemDetail, getProduct } from "../../index";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct(1).then((res) => {
      setProduct(res);
    });
  }, []);

  console.log(product);
  return (
    <div>
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;
