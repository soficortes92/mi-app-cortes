import React from "react";
import Item from "../Item/Item";

function ItemList({ productos }) {
  // const [info , setInfo] = useState([])

  // useEffect(()=>{
  //   setTimeout(() =>
  //   fetch('Products.json')
  //   .then((resp)=> resp.json())
  //   .then((prod)=> setInfo(prod)
  //   ),2000
  //   );} ,[])

  return (
    <div>
      {productos && productos.map((i) => <Item key={i.id} producto={i} />)}
    </div>
  );
}

export default ItemList;
