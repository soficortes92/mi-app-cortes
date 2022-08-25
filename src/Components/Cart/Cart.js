import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../Context/CartContext';
import { doc, addDoc, collection, updateDoc, getFirestore } from 'firebase/firestore';
import Swal from 'sweetalert2';
import Form from '../Form';



const Cart = () => {
  const { cart, removeItem, emptyCart, totalCompra } = useContext(CartContext);
  
  const [idVenta, setIdVenta] = useState("");
  
  const finalizarCompra = () => {
    
    const db = getFirestore()
    
    const ventasCollection = collection(db, "ventas");
    addDoc(ventasCollection, {
      items: cart,
      total: totalCompra(),
    }).then((result) => {setIdVenta(result.id)});

    cart.forEach((item) => {
      const updateCollection = doc(db, 'items', item.id)
      return updateDoc(updateCollection,{
          stock: item.stock - item.qty,
        })
    });
    
    emptyCart();
  }

  useEffect(() => {
    if (idVenta.length > 0) {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Se ha registrado la compra en el sistema con el siguiente id: '+ idVenta,
            showConfirmButton: false,
            timer: 5000
        });
    }
})

  return (
    <>
      <div>Cart</div>
      {cart.map((product, key) => (
        <div key={key}>
          <div>{product.titulo}</div>
          <p>Precio por unidad: ${product.precio}</p>
          <p>Cantidad: {product.qty}</p>
          <button onClick={ () => {removeItem(product.id)}}>ELIMINAR</button>
        </div>
      ))}
      <button onClick={emptyCart}>VACIAR CARRITO</button>
      <p>PRECIO FINAL: ${totalCompra()}</p>
      <div>
        <Form fCompra={finalizarCompra} />
      </div>
    </>
  );
};
export default Cart;