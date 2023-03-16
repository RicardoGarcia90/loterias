import { useState } from 'react';
import './Lotomania.css';

const Lotomania = (props) => {
  const [sorteio, setSorteio] = useState('');

  function geraNumeros() {
    const numerosSorteados = [];
    while (numerosSorteados.length < 50) {
      var numero = Math.floor(Math.random() * 99);
      if (numerosSorteados.indexOf(numero) === -1) {
        numerosSorteados.push(numero);
      }
    }
    console.log(numerosSorteados);

    props.handleResult(
      numerosSorteados.map((sort, i) => (
        <li className="list-numbers" key={i}>
          {sort}
        </li>
      ))
    );
  }

  return (
    <div>
      <h2 className="titleLotomania">Lotomania</h2>
      <button onClick={geraNumeros}>Gerar números</button>
    </div>
  );
};

export default Lotomania;
