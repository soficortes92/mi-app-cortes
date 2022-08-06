import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

const Form = () => {
    const { cart, totalCompra } = useContext(CartContext);

    return (
        <>
        {cart.map((product, key) => (
        <div key={key}>
          <div>{product.titulo}</div>
          <p>Precio por unidad: ${product.precio}</p>
          <p>Cantidad: {product.qty}</p>
        </div>
      ))}
        <p>PRECIO FINAL: ${totalCompra()}</p>
        <p>DATOS DEL COMPRADOR</p>
        <form onSubmit={() => {}}>
            <label>Nombre</label>
                <input type= 'text' />
            <label>Apellido</label>
                <input type= 'text' />
            <label>Telefono</label>
                <input type= 'number' />
            <button type= 'submit'>GENERAR ORDEN</button>
        </form>
        </>
        )
}

export default Form;