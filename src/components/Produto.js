import React from 'react';

const Produto = () => {
  const Cards = [
    {
      id: 'card1',
      title: 'PLANO 01',
      price: 'R$ 00,00',
      description: 'Descrição',
      advantages: [
        { name: 'Acesso 01' },
        { name: 'Acesso 02' },
        { name: 'Acesso 03' },
      ],
      btn: 'ASSINAR',
      cname: 'card-header card-plan1',
    },
    {
      id: 'card2',
      title: 'PLANO 02',
      price: 'R$ 00,00',
      description: 'Descrição',
      advantages: [
        { name: 'Acesso 01' },
        { name: 'Acesso 02' },
        { name: 'Acesso 03' },
      ],
      btn: 'ASSINAR',
      cname: 'card-header card-plan2',
    },
    {
      id: 'card3',
      title: 'PLANO 03',
      price: 'R$ 00,00',
      description: 'Descrição',
      advantages: [
        { name: 'Acesso 01' },
        { name: 'Acesso 02' },
        { name: 'Acesso 03' },
      ],
      btn: 'ASSINAR',
      cname: 'card-header card-plan3',
    },
  ];
  return (
    <section className="container" id="produto">
      <h1>Produto</h1>
      <p>
        What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the industry's standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </p>
      <div className="card-container">
        {Cards.map(card => {
          return (
            <div className="card" key={card.id}>
              <div className={card.cname}>
                <div className="card-title">
                  <h1>{card.title}</h1>
                  <p>{card.price}</p>
                </div>
              </div>
              <div className="card-body">
                <div className="card-description">
                  <p>{card.description}</p>
                </div>
                <div className="advantage">
                  <ul>
                    {card.advantages.map(advantage => {
                      return <li key={advantage.name}>{advantage.name}</li>;
                    })}
                  </ul>
                </div>
              </div>
              <div className="card-footer">
                <button className="card-button">{card.btn}</button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Produto;
