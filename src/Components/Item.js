import './Item.css';

function Item({producto, precio}) {
  return (
  <div className = "Card">
    <h4>{producto}</h4>
    <button>Ver detalle del producto</button>
    <p>{precio}</p>
  </div>
  );
}

export default Item;