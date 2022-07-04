import './Item.css';

function Item({producto}) {
  return (
  <div className = "Card">
    <h4>{producto.titulo}</h4>
    <button>Ver detalle del producto</button>
    <p>{producto.precio}</p>
  </div>
  );
}

export default Item;