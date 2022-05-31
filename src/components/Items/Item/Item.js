// --------  IMPORTS --------
import React from "react";

// -------- CSS IMPORTS --------
import "./Item.css";

const Item = ({ name, img, price }) => {
  console.log(name);

  return (
    <div>
      <img src={`../../${img}`} />
      {name}
      {price}
      <br />
    </div>
  );
};

export default Item;
