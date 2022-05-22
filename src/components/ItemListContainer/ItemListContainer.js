import React from "react";
import characterImage from "../../images/landing.png";
import "./ItemListContainer.css";

const ItemListContainer = (props) => {
  return (
    <div className="item-list-container">
      <div>
        <h1 className="greeting">{props.greeting}</h1>
        <h3 className="subtitle">{props.subtitle} Click <a href="https://www.youtube.com/watch?v=mCdA4bJAGGk" style={{fontWeight: '600'}} className="ricks">here</a> to see more.</h3>
      </div>
      <img src={characterImage} className="character-image"></img>
    </div>
  );
};

export default ItemListContainer;
