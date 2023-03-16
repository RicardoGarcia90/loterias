import { useState } from 'react';
import './App.css';
import Lotofacil from './components/lotofacil/Lotofacil';
import Lotomania from './components/lotomania/Lotomania';
import MegaSena from './components/megaSena/MegaSena';
import NumerosSorteados from './components/numerosSorteados/NumerosSorteados';

function App() {
  const [result, setResult] = useState('Os números sorteados aparecerão aqui');

  const numerosDoSorteio = (r) => {
    setResult(r);
  };

  const limpar = () => {
    setResult('Os números sorteados aparecerão aqui');
  };

  return (
    <div className="card">
      <h1 className="title">Loterias</h1>
      <div className="sortContainer">
        <MegaSena handleResult={numerosDoSorteio} />
        <Lotofacil handleResult={numerosDoSorteio} />
        <Lotomania handleResult={numerosDoSorteio} />
      </div>

      <button className="btnLimpar" onClick={limpar}>
        Limpar
      </button>
      <div className="result">{result}</div>
    </div>
  );
}

export default App;
