import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

const Cart = () => {
  const { cart } = useContext(CartContext);
  if (cart.length === 0) {
    return <h1>El carrito esta vacio</h1>;
  }
  return (
    <>
      <div>Cart</div>
      {cart.map((product, key) => (
        <div key={key}>
          <div>{product.titulo}</div>
          <p>Cantidad: {product.qty}</p>
        </div>
      ))}
    </>
  );
};
export default Cart;
