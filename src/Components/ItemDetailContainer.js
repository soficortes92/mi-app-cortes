import ItemDetail from './ItemDetail'
import { useEffect, useState } from 'react';

function ItemDetailContainer() {

  const [info , setInfo] = useState({})
  
  useEffect(()=>{
    setTimeout(() => 
    fetch('Products.json')
    .then((resp)=> resp.json())
    .then((prod)=> setInfo(prod[0])
    ),5000
    );} ,[])

  return (
    <div>
    <ItemDetail producto={info} /> 
    </div>
  );
}

  export default ItemDetailContainer;