import { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log(cart);

  const isInCart = (id) => {
    cart.some((p) => p.id === addedProduct.id);
  };

  const addItem = (addedProduct) => {
    if (!isInCart(addedProduct.id)) {
      setCart([...cart, addedProduct]);
    }
  };

  const removeItem = (id) => {
    const newCart = cart.filter((p) => p.id !== id);
    setCart(newCart);
  };

  const getCartQty = () => {
    let totalQuantity = 0;

    cart.forEach((p) => {
      totalQuantity += p.quantity;
    });
    return totalQuantity;
  };

  return (
    <createContext.Provider value={{ cart, addItem, removeItem, getCartQty }}>
      {children}
    </createContext.Provider>
  );
};

export default CartContext;
