import { useEffect, useState } from 'react';
import Item from './Item';


function ItemList() {

  const [info , setInfo] = useState()
  
  useEffect(()=>{
    setTimeout(() => 
    fetch('Products.json')
    .then((resp)=> resp.json())
    .then((Prod)=> setInfo(Prod)
    ),2000
    );} ,[])
    
  return (
    <div>
    {info && info.map(i => <Item producto={i.titulo} precio={i.precio} />)} 
    </div>
  );
}
  
export default ItemList;