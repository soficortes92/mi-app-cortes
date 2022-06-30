import Card from './Card';
import Products from '../Products/Products'

function CardList() {
    return (
        <>
        {Products.map((producto) => <Card producto = {producto} />)}
        </>
    );
  }
  
  export default CardList;