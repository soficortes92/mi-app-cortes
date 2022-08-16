import React, { useEffect, useState } from "react";
import "./ListContainer.css";
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../Firebase/Config.js";

function ListContainer() {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(false);
  const { categoryItems } = useParams();
  useEffect(() => {
    setLoading(true);
    const productCollection = collection(db, "products");

    if (
      categoryItems === null ||
      categoryItems === undefined ||
      categoryItems === ""
    ) {
      getDocs(productCollection).then((snapshot) => {
        setLoading(false);
        setProducts(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      });
    } else {
      const categoria = query(
        productCollection,
        where("categoria", "==", categoryItems)
      );
      getDocs(categoria).then((snapshot) => {
        setLoading(false);
        setProducts(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      });
    }
  }, [categoryItems]);

  return (
    <>
      {loading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div className="producto">
          <ItemList productos={products} />
        </div>
      )}
    </>
  );
}

export default ListContainer;
