import React, { useContext } from "react";
import CartContext from "../../../context/CartContext";
import { AiOutlineShoppingCart } from "react-icons/ai";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  // const totalQuantity = getCartQty();

  return (
    <div>
      <AiOutlineShoppingCart size={24} />
      {totalQuantity}
    </div>
  );
};

export default CartWidget;
