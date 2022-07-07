import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const [info, setInfo] = useState([]);
  const { idItems } = useParams();

  useEffect(() => {
    setTimeout(
      () =>
        fetch("Products.json")
          .then((resp) => resp.json())
          .then((prod) => {
            setInfo(prod);
            console.log(prod);
          }),
      2000
    );
  }, [idItems, info]);

  return (
    <div>
      <ItemDetail producto={info} />
    </div>
  );
}

export default ItemDetailContainer;
