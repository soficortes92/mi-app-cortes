import React from "react";

const Form = ({fCompra}) => {
    

    const datosComprador = () => {
        let name = document.getElementById('first_name').value;
        let lastName = document.getElementById('last_name').value;
        let email = document.getElementById('email').value;
        let phoneNumber = document.getElementById('phone_number').value;
        let checkboxTerms = document.getElementById('checkboxTerms');

        if (name.length > 0 && lastName.length > 0 && email.length > 0 && phoneNumber > 0 && checkboxTerms.checked) {
            const dataComprador = {
                name: name,
                lastName: lastName,
                email: email,
                phoneNumber: phoneNumber
            }
            fCompra(dataComprador);
        }
    }

    return (
        <div>
            <h3>Datos del Cliente</h3>
            <form>
                <div>
                    <div>
                        <label for="first_name">Nombre</label>
                        <input id="first_name" type="text" className="validate" required/>
                    </div>
                    <div>
                        <label for="last_name">Apellido</label>
                        <input id="last_name" type="text" className="validate" required/>
                    </div>
                </div>
                <div>
                    <div>
                        <label for="email">Email</label>
                        <input id="email" type="email" className="validate" required/>
                    </div>
                    <div>
                        <label for="phone_number">Teléfono</label>
                        <input id="phone_number" type="number" className="validate" required/>
                    </div>
                </div>
                <div>
                <p>
                    <label>
                        <input type="checkbox" id="checkboxTerms"/>
                        <span>Acepto terminos, condiciones y tratamiento de datos personales</span>
                    </label>
                </p>
                </div>
            </form>
            <button onClick={datosComprador}>Finalizar Compra</button>
        </div>
    )
}

export default Form;








// // import React, { useContext } from 'react';
// // import { CartContext } from '../Context/CartContext';

// const Form = () => {
//     const { cart, totalCompra } = useContext(CartContext);

//     return (
//         <>
//         {cart.map((product, key) => (
//         <div key={key}>
//           <div>{product.titulo}</div>
//           <p>Precio por unidad: ${product.precio}</p>
//           <p>Cantidad: {product.qty}</p>
//         </div>
//       ))}
//         <p>PRECIO FINAL: ${totalCompra()}</p>
//         <p>DATOS DEL COMPRADOR</p>
//         <form onSubmit={() => {}}>
//             <label>Nombre</label>
//                 <input type= 'text' />
//             <label>Apellido</label>
//                 <input type= 'text' />
//             <label>Telefono</label>
//                 <input type= 'number' />
//             <button type= 'submit'>GENERAR ORDEN</button>
//         </form>
//         </>
//         )
// }

// export default Form;