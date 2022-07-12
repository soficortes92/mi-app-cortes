import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Contador from "./Contador";

function ItemDetail({ producto }) {
  const navigate = useNavigate();

  const onAdd = () => {
    navigate("/cart");
  };

  return (
    <div className="Card">
      <h4>{producto.titulo}</h4>
      <p>{producto.detalle}</p>
      <img src={`../${producto.imagen}`} alt={producto.titulo} width="400px" />
      <p>$ {producto.precio}</p>
      <Contador stock={producto.stock} onAdd={onAdd} />
      <Link to={"/"}>Inicio</Link>
    </div>
  );
}

export default ItemDetail;
