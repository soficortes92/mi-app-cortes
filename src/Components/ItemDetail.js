function ItemDetail({producto}) {
  return (
  <div className = "Card">
    <h4>{producto.titulo}</h4>
    <p>{producto.detalle}</p>
    <img src={producto.imagen} alt={producto.titulo} width= "400px" />
    <p>$ {producto.precio}</p>
  </div>
  );
}

export default ItemDetail;