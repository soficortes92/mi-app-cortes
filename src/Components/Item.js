import './Item.css';

function Item({producto}) {
  return (
  <div className = "Card">
    <h4>{producto.titulo}</h4>
    <p>{producto.precio}</p>
    <button>Ver detalle del producto</button>
  </div>
  );
}

export default Item;