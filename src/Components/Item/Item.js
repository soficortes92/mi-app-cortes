import "./Item.css";
import React from "react";
import { Link } from "react-router-dom";

function Item({ producto }) {
  return (
    <div className="Card">
      <h4>{producto.titulo}</h4>
      <img src={`../${producto.imagen}`} alt={producto.titulo} width="275px" />
      <p>$ {producto.precio}</p>
      <button>
        <Link to={`/item/${producto.id}`}>Ver detalle del producto</Link>
      </button>
    </div>
  );
}

export default Item;
