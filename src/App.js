import './App.css';
import Lotofacil from './components/lotofacil/Lotofacil';
import Lotomania from './components/lotomania/Lotomania';

import MegaSena from './components/megaSena/MegaSena';

function App() {
  return (
    <div className="container">
      <h1 className="title">Loterias</h1>
      <div>
        <MegaSena />
        <Lotofacil />
        <Lotomania />
      </div>
    </div>
  );
}

export default App;
