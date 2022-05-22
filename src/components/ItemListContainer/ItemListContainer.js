import React from 'react';
import characterImage from "../../images/landing.png";

const ItemListContainer = (props) => {
  return (
    <div>
        <h1>{props.greeting}</h1>
        <img src={characterImage}></img>
    </div>
  )
}

export default ItemListContainer;
