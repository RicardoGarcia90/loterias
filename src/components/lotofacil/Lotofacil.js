import Button from '../UI/Button';
import './Lotofacil.css';

const Lotofacil = (props) => {
  function geraNumeros() {
    const numerosSorteados = [];
    while (numerosSorteados.length < 15) {
      var numero = Math.floor(Math.random() * 25) + 1;
      if (numerosSorteados.indexOf(numero) === -1) {
        numerosSorteados.push(numero);
      }
      numerosSorteados.sort(function (a, b) {
        return a - b;
      });
    }
    console.log(numerosSorteados);

    props.handleResult(
      numerosSorteados.map((sort, i) => (
        <li className="list-numbers list-lotofacil" key={i}>
          {sort}
        </li>
      ))
    );
  }

  return (
    <div className="lotofacil-container">
      <h2 className="titleLotofacil">Lotofacil</h2>
      <Button className="btn-lotofacil" onClick={geraNumeros} />
    </div>
  );
};

export default Lotofacil;
