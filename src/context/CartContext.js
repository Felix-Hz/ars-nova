import { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log(cart);

  const addItem = (addedProduct) => {
    if (!cart.some((p) => p.id === addedProduct.id)) {
      setCart([...cart, addedProduct]);
    }
  };

  return (
    <createContext.Provider value={{ cart, addItem }}>
      {children}
    </createContext.Provider>
  );
};

export default CartContext;