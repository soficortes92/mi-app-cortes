import './Card.css';
import Contador from './Contador' 
import CardFoto from '../Assets/MarioKart.jpeg'

function Card({producto}) {
  return (
  <div className = "Card">
    <h4>{producto.titulo}</h4>
    <img className="imgCard" alt="" src={producto.imagen}/>
    <img className="imgCard" alt="" src={CardFoto}/>
    <button>Detalle</button>
    <p>{producto.precio}</p>
    <Contador className="contador" stock={producto.stock} />
  </div>
  );
}

export default Card;