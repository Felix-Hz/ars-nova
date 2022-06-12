import React, { useState, useEffect } from "react";
import { ItemDetail, getProduct } from "../../index";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);

  // returns all url params
  const { itemId } = useParams();
  console.log(itemId);

  useEffect(() => {
    getProduct(parseInt(itemId)).then((res) => {
      setProduct(res);
    });
    // eslint-disable-next-line
  }, []);

  console.log(product);
  return (
    <div>
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;
