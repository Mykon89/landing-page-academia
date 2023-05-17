import React from 'react';
import Contato from './Contato';
import Home from './Home';
import './Main.css';
import Produto from './Produto';
import Sobre from './Sobre';

export default function Main() {
  return (
    <div className="container">
      <h1>
        <Home />
        <Sobre />
        <Produto />
        <Contato />
      </h1>
    </div>
  );
}
