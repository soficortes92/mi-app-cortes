import { useEffect, useState } from 'react';
import Item from './Item';


function ItemList() {

  const [info , setInfo] = useState([])
  
  useEffect(()=>{
    setTimeout(() => 
    fetch('Products.json')
    .then((resp)=> resp.json())
    .then((prod)=> setInfo(prod)
    ),2000
    );} ,[])

  return (
    <div>
    {info && info.map(i => <Item key={i.id} producto={i} />)} 
    </div>
  );
}
  
export default ItemList;