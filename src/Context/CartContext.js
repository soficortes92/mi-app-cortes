import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, qty) => {
    console.log('Pase por acá');
    if (isInCart(item.id)) {
      let index = cart.findIndex((el) => el.id === item.id);
      let product = cart[index];
      product.qty = product.qty + qty;

      const newCart = [...cart];
      newCart.splice(index, 1, product);

      setCart([...newCart]);

      console.log(newCart);
    } else {
      setCart([...cart, { ...item, qty }]);
    }
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
