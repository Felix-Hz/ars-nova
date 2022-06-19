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

  const removeItem = (id) => {
    const newCart = cart.filter((p) => p.id !== id);
    setCart(newCart);
  };

  return (
    <createContext.Provider value={{ cart, addItem, removeItem }}>
      {children}
    </createContext.Provider>
  );
};

export default CartContext;
