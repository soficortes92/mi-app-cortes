import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, qty) => {
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

  const emptyCart = () => {setCart([])};

  const removeItem = (id) => {
    let arrayFiltrado = cart.filter((prod) => prod.id !== id);
    setCart(arrayFiltrado) 
  };  
  
  const totalCompra = () => {
    let total = 0;
    cart.forEach((prod) => {total += prod.precio * prod.qty})
    return total
  };

  const totalProd = () => {
    let total = 0;
    cart.forEach((prod) =>{total += prod.qty})
    return total
  }

  return (
    <CartContext.Provider value={{cart, addToCart, emptyCart, removeItem, totalCompra, totalProd}}>
      {children}
    </CartContext.Provider>
  );
};
