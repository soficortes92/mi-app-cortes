import './Card.css';
import Contador from './Contador' 
import CardFoto from '../Assets/MarioKart.jpeg'

function Card({producto, precio}) {
  return (
  <div className = "Card">
    <h4>{producto}</h4>
    <img alt="" src={CardFoto}/>
    <p>{precio}</p>
    <Contador stock={5} />
  </div>

  );
}

export default Card;