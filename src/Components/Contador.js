import { useState } from "react";

function Contador({ stock, onAdd }) {
  const [num, setNum] = useState(0);

  const sumar = () => {
    if (num < stock) {
      setNum(num + 1);
    }
  };

  const resta = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };

  return (
    <>
      <p>{num}</p>
      <button onClick={sumar}>Suma</button>
      <button onClick={resta}>Resta</button>
      <button onClick={() => onAdd(num)}>Agregar al Carrito</button>
    </>
  );
}

export default Contador;
