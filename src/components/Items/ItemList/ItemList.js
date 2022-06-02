// -------- IMPORTS --------
import React from "react";
import { Item } from "../../index";

// -------- CSS IMPORTS --------
import "./ItemList.css";

const ItemList = ({ products }) => {
  return (
    <div className="item-list-container">
      <ul className="list-container">
        <li className="item-container">
          {products.map((p) => (
            <Item key={p.id} {...p} />
          ))}
        </li>
      </ul>
    </div>
  );
};

export default ItemList;
