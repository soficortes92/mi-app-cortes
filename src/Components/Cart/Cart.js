import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeItem } = useContext(CartContext);
  if (cart.length === 0) {
    return (
      <>
        <h1>El carrito esta vacio</h1>
        <Link to="/">Volver al Inicio</Link>
      </>
    );
  }
  return (
    <>
      <div>Cart</div>
      {cart.map((product, key) => (
        <div key={key}>
          <div>{product.titulo}</div>
          <p>Cantidad: {product.qty}</p>
          <button
            onClick={() => {
              removeItem(product.id);
            }}
          >
            ELIMINAR
          </button>
        </div>
      ))}
    </>
  );
};
export default Cart;
