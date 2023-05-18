import React from 'react';
import Contato from './Contato';
import Home from './Home';
import './Main.css';
import Produto from './Produto';
import Sobre from './Sobre';

export default function Main() {
  return (
    <div>
      <Home />
      <Sobre />
      <Produto />
      <Contato />
    </div>
  );
}
