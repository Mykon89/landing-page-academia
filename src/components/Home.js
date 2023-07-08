import React from 'react';
import Contato from './Contato';
import Inicial from './Inicial';
import Navbar from './Navbar';
import Produto from './Produto';
import Sobre from './Sobre';

const Home = () => {
  return (
    <>
      <Navbar />
      <Inicial />
      <Sobre />
      <Produto />
      <Contato />
    </>
  );
};

export default Home;
