import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader";

function ItemDetailContainer() {
  const [info, setInfo] = useState();
  const { idItems } = useParams();

  useEffect(() => {
    setTimeout(() => {
      fetch("../Products.json")
        .then((resp) => resp.json())
        .then((prod) => {
          setInfo(prod);
        });
    }, 500);
  }, [idItems]);

  return (
    <>
      {info ? (
        <div>
          <ItemDetail producto={info[idItems - 1]} />
        </div>
      ) : (
        <div>
          <Loader />
        </div>
      )}
    </>
  );
}

export default ItemDetailContainer;
