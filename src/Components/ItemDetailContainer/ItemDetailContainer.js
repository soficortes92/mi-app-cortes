import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../Firebase/Config.js";
import Loader from "../Loader";

function ItemDetailContainer() {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(false);
  const { idItems } = useParams();

  useEffect(() => {
    setLoading(true);
    const productCollection = doc(db, "products", idItems);
    console.log("productCollection: ", productCollection);
    getDoc(productCollection).then((snapshot) => {
      setLoading(false);
      setProduct(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, [idItems]);

  return (
    <>
      {loading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div>{/* <ItemDetail producto={product} /> */}</div>
      )}
    </>
  );
}

export default ItemDetailContainer;
