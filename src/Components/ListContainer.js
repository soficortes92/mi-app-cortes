import React, { useEffect, useState } from "react";
import "./ListContainer.css";
import ItemList from "./ItemList";
// import { useParams } from "react-router-dom";

function ListContainer() {
  const [info, setInfo] = useState([]);
  // const { categoryId } = useParams();

  useEffect(() => {
    setTimeout(
      () =>
        fetch("Products.json")
          .then((resp) => resp.json())
          .then((prod) => setInfo(prod)),
      2000
    );
  }, []);

  return <ItemList productos={info} />;
}

export default ListContainer;
