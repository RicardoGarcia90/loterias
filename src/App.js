import { useState } from 'react';
import './App.css';
import Lotofacil from './components/lotofacil/Lotofacil';
import Lotomania from './components/lotomania/Lotomania';
import MegaSena from './components/megaSena/MegaSena';

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
      <p className="paragrafo">
        Clique em um dos botões de cada jogo para gerar números aleatórios de
        apostas
      </p>
      <div className="sortContainer">
        <MegaSena handleResult={numerosDoSorteio} />
        <Lotofacil handleResult={numerosDoSorteio} />
        <Lotomania handleResult={numerosDoSorteio} />
      </div>

      <div className="btnLimpar-container">
        <button className="btnLimpar" onClick={limpar}>
          Limpar
        </button>
      </div>
      <div className="result">{result}</div>
    </div>
  );
}

export default App;
