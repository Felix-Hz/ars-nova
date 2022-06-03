// -------- IMPORTS --------
import React from "react";
import { Item } from "../../index";

// -------- CSS IMPORTS --------
import "./ItemList.css";

const ItemList = ({ products }) => {
  return (
    <div className="item-list-container">
      <ul className="list-container">
          {products.map((p) => (
            <Item className="item-card" key={p.id} {...p} />
          ))}
      </ul>
    </div>
  );
};

export default ItemList;
