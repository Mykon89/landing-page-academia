import React from 'react';
import { Cards } from './Cards';
import './Cards.css';

export default function Produto() {
  return (
    <section className="Produto" id="produto">
      <div>
        <h1>Produto</h1>
        <p>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <div className="container">
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
      </div>
    </section>
  );
}
