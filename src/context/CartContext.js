import { useState, useEffect, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  console.log(cart);

  useEffect(() => {
    let totalQuantity = 0;

    cart.forEach((array) => {
      array.forEach((product) => {
        totalQuantity += product.quantity;
      });
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
    const newCart = [];
    cart.forEach((nestedArray) => {
      const cleanArray = nestedArray.filter((p) => p.id !== id);
      if (cleanArray != "") {
        newCart.push(cleanArray);
      }
    });
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotal = () => {
    let total = 0;
    cart.forEach((nestedArray) => {
      nestedArray.forEach((prod) => {
        total += prod.quantity * prod.price;
      });
    });
    return total;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        totalQuantity,
        addItem,
        isInCart,
        removeItem,
        clearCart,
        getTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
