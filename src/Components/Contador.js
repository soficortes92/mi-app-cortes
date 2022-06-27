import { useState } from "react";

function Contador({stock}) {
    const [num, setNum] = useState(0);

    const sumar = () => {
        if (num<stock) { 
        setNum(num + 1)
      }
    }

    const resta = () => {
        if (num>0) {
            setNum(num - 1)
        }
    }

  return (
    <>
      <p>{num}</p>
      <button onClick={sumar}>Suma</button>
      <button onClick={resta}>Resta</button>
      <button>Agregar al carrito</button>
    </>
  )
}

export default Contador;