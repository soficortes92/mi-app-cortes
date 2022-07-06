import './Item.css';
import React from 'react';

function Item({producto}) {

  return (
  <div className = "Card">
    <h4>{producto.titulo}</h4>
    <p>{producto.precio}</p>
    <img src={producto.imagen} alt={producto.titulo} />
    <button>Ver detalle del producto</button>
  </div>
  );
}

export default Item;