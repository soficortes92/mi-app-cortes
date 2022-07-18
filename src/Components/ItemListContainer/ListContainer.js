import React, { useEffect, useState } from "react";
import "./ListContainer.css";
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader";
import { useParams } from "react-router-dom";

function ListContainer() {
  const [info, setInfo] = useState();
  const { categoryItems } = useParams();

  useEffect(() => {
    setTimeout(
      () =>
        fetch("../Products.json")
          .then((resp) => resp.json())
          .then((prod) => {
            if (categoryItems === undefined) {
              setInfo(prod);
              console.log("sinCat");
            } else {
              const itemCategory = prod.filter((cat) => {
                return cat.categoria === categoryItems;
              });
              setInfo(itemCategory);
              console.log(itemCategory);
              console.log("conCat");
            }
          }),
      500
    );
  }, [categoryItems]);

  return (
    <>
      {info ? (
        <div>
          <ItemList productos={info} />
        </div>
      ) : (
        <div>
          <Loader />
        </div>
      )}
    </>
  );
}

export default ListContainer;
