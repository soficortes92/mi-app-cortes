import "./ItemList.css";
import React from "react";
import Item from "../Item/Item";

function ItemList({ productos }) {

  return (
    <div className="divContainer">
      {productos && productos.map((i) => <Item key={i.id} producto={i} />)}
    </div>
  );
}

export default ItemList;
