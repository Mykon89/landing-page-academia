import React from 'react';
import SobreImg from '../assets/sobre.jpg';

const Sobre = () => {
  return (
    <section className="container" id="sobre">
      <div>
        <h1>Sobre</h1>
        <p>Um pouco sobre nós</p>
        <p>Porque Focus Gym?</p>
        <p>
          Somos o futuro do fitness, somos liberdade geográfica, conectamos
          oportunidades ao seu negócio.
        </p>
        <p>
          Idealizada por ex-colaboradores de grandes empresas o sistema de
          gestão para academias, estúdios e box de Crossfit Focus Gym® nasce da
          necessidade do mercado fitness, que buscava segurança, confiabilidade,
          desempenho e um custo drasticamente inferior.
        </p>
        <p>
          Soluções que tornam o gerenciamento das academias uma tarefa
          extremamente simples, aproximando sua academia dos seus clientes,
          através de modernos mecanismos de fidelização e acompanhamento de
          performance, tudo através de um único software.
        </p>
        <p>
          Somos All stack in one software, com o software para academias,
          estúdios, box e personais Focus Gym® você não precisa mais perder
          tempo buscando informações e aprendendo a mexer em vários sistemas,
          inove você também, junte-se ao grupo de clientes que estão tendo total
          diferença em sua gestão.
        </p>
      </div>
      <div className="img-sobre">
        <img src={SobreImg} alt="sobre" />
      </div>
    </section>
  );
};

export default Sobre;
