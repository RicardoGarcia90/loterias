import { useState } from 'react';
import './MegaSena.css';
import NumerosSorteados from '../numerosSorteados/NumerosSorteados';

const MegaSena = (props) => {
  // const [sorteio, setSorteio] = useState('');

  function geraNumeros() {
    const numerosSorteados = [];
    while (numerosSorteados.length < 6) {
      var numero = Math.floor(Math.random() * 60) + 1;
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
      <h2 className="titleMegaSena">Mega-Sena</h2>
      <button className="btn-megaSena" onClick={geraNumeros}>
        Gerar números
      </button>
    </div>
  );
};

export default MegaSena;
