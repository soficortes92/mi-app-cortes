import './Item.css';
import React from 'react';

function Item({producto}) {

  return (
  <div className = "Card">
    <h4>{producto.titulo}</h4>
    <img src={producto.imagen} alt={producto.titulo} width="400px" />
    <p>$ {producto.precio}</p>
    <button>Ver detalle del producto</button>
  </div>
  );
}

export default Item;