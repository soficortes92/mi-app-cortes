function ItemDetail({producto}) {
  return (
  <div className = "Card">
    <h4>{producto.titulo}</h4>
    <p>{producto.precio}</p>
    <p>{producto.detalle}</p>
  </div>
  );
}

export default ItemDetail;