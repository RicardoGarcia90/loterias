import Button from '../UI/Button';
import './Lotomania.css';

const Lotomania = (props) => {
  function geraNumeros() {
    const numerosSorteados = [];
    while (numerosSorteados.length < 50) {
      var numero = Math.floor(Math.random() * 99);
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
        <li className="list-numbers list-lotomania" key={i}>
          {sort}
        </li>
      ))
    );
  }

  return (
    <div className="lotomania-container">
      <h2 className="titleLotomania">Lotomania</h2>
      <Button className="btn-lotomania" onClick={geraNumeros} />
    </div>
  );
};

export default Lotomania;
