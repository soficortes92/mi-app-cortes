import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = () => {
    const [cart, setCart] = useState([]);


const addToCart = (item, qty) => {

    if (isInCart(item.id)) {
      let index = cart.findIndex(el => el.id === item.id);
      let product = cart[index];
      product.qty = product.qty + qty;

      const newCart = [...cart];
      newCart.splice(index, 1, product);

      setCart([...newCart]);

      console.log(newCart);
    } else {

      setCart([...cart, { ...item, qty }]);
     
    }

    }}