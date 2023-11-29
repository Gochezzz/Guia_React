import React, { useState } from 'react';
import logo from '../logo.svg'
function Contador() {
  const [contador, setContador] = useState(0);
  
  const incrementarContador = () => {
    setContador(contador + 1);
  };
  const decrementarContador = () => {
    setContador(contador - 1);
  };
  const ResetContador = () => {
    setContador(0);
  };

  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Contador: {contador}</p>
        <button class="Color-b" onClick={incrementarContador}>Incrementar</button>
        <button class="Color-b" onClick={decrementarContador}>Disminuir</button>
        <button class="Color-b" onClick={ResetContador}>Reset</button>
      </header>
    </div>
  );
}
export default Contador;