import { useState } from 'react';
import './NumerosSorteados.css';

const NumerosSorteados = (props) => {
  return (
    <div className="numSort-box">
      <div>{props.testeNum}</div>
    </div>
  );
};

export default NumerosSorteados;
