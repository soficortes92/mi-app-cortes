import React from "react";
import { Link } from "react-router-dom";

function ItemDetail({ producto }) {
  return (
    <div className="Card">
      <h4>{producto.titulo}</h4>
      <p>{producto.detalle}</p>
      <img src={producto.imagen} alt={producto.titulo} width="400px" />
      <p>$ {producto.precio}</p>
      <Link to={"/cart"}>Finalizar Compra</Link>
      <Link to={"/"}>Inicio</Link>
    </div>
  );
}

export default ItemDetail;
