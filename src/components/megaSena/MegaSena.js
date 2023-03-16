import { useState } from 'react';
import './MegaSena.css';

const MegaSena = (props) => {
  const [sorteio, setSorteio] = useState('');

  function geraNumeros() {
    const numerosSorteados = [];
    while (numerosSorteados.length < 6) {
      var numero = Math.floor(Math.random() * 60) + 1;
      if (numerosSorteados.indexOf(numero) === -1) {
        numerosSorteados.push(numero);
      }
    }
    console.log(numerosSorteados);

    setSorteio(numerosSorteados.map((sort, i) => <li key={i}>{sort}</li>));
  }

  function limparNumeros() {
    setSorteio('');
  }

  return (
    <div>
      <h2>Mega-Sena</h2>
      <button onClick={geraNumeros}>Gerar números</button>
      <button onClick={limparNumeros}>Limpar</button>
      <div>
        <p>Numeros sorteados:</p>
        <ul>{sorteio}</ul>
      </div>
    </div>
  );
};

export default MegaSena;
