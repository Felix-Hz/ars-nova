import { useState, useEffect, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  // console.log(cart);

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
    let state = false;
    cart.forEach((nestedArray) => {
      nestedArray.forEach((array) => {
        if (array.id === id) {
          state = true;
        }
      });
    });
    return state;
  };

  const addItem = (addedProduct) => {
    if (!isInCart(addedProduct[0].id)) {
      setCart([...cart, addedProduct]);
    } else {
      cart.forEach((nestedArray) => {
        nestedArray.forEach((product) => {
          if (product.id === addedProduct[0].id) {
            product.quantity += addedProduct[0].quantity;
          }
        });
      });
    }
  };

  const removeItem = (id) => {
    const newCart = [];
    cart.forEach((nestedArray) => {
      const cleanArray = nestedArray.filter((p) => p.id !== id);
      // eslint-disable-next-line
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
