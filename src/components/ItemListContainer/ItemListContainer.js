import React from "react";
import characterImage from "../../images/landing.png";
import "./ItemListContainer.css";

const ItemListContainer = (props) => {
  return (
    <div className="item-list-container">
      <h1 className="greeting">{props.greeting}</h1>
      <img src={characterImage} className="character-image"></img>
    </div>
  );
};

export default ItemListContainer;
