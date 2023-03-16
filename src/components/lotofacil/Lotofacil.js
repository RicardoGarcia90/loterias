import { useState } from 'react';
import './Lotofacil.css';

const Lotofacil = (props) => {
  const [sorteio, setSorteio] = useState('');

  function geraNumeros() {
    const numerosSorteados = [];
    while (numerosSorteados.length < 15) {
      var numero = Math.floor(Math.random() * 25) + 1;
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
      <h2 className="titleLotofacil">Lotofacil</h2>
      <button onClick={geraNumeros}>Gerar números</button>
    </div>
  );
};

export default Lotofacil;
