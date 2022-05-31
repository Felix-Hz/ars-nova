// -------- IMPORTS --------
import React from "react";
import { Item } from "../../index";

// -------- CSS IMPORTS --------
import "./ItemList.css";

const ItemList = ({ products }) => {
  return (
    <div>
      <ul>
        {products.map((p) => (
          <Item key={p.id} {...p} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
