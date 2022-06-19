import React, { useContext } from "react";
import CartContext from "../../../context/CartContext";

const CartWidget = () => {
  const { cartQty } = useContext(CartContext);
  const totalQuantity = getCartQty();

  return (
    <div>
      <AiOutlineShoppingCart size={24} />
      {totalQuantity}
    </div>
  );
};

export default CartWidget;
