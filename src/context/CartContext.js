import { useState, useEffect, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  console.log(cart);

  useEffect(() => {
    let totalQuantity = 0;

    cart.forEach((p) => {
      totalQuantity += p.quantity;
    });

    setTotalQuantity(totalQuantity);
  }, [cart]);

  const isInCart = (id) => {
    cart.some((p) => p.id === id);
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

  // const getCartQty = () => {
  //   let totalQuantity = 0; 

  //   cart.forEach((p) => {
  //     totalQuantity += p.quantity;
  //   });

  //   return totalQuantity;
  // };

  return (
    <createContext.Provider
      value={{ cart, totalQuantity, addItem, isInCart, removeItem }}
    >
      {children}
    </createContext.Provider>
  );
};

export default CartProvider;
