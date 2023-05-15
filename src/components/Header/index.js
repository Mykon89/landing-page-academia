import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <nav className="Navbar">
      <div className="navbar-logo">
        <img src="/" alt="logo" />
      </div>
      <ul className="navbar-menu">
        <li>
          <a href="/">
            <p>Home</p>
          </a>
        </li>
        <li>
          <a href="/">
            <p>Sobre</p>
          </a>
        </li>
        <li>
          <a href="/">
            <p>Produto</p>
          </a>
        </li>
        <li>
          <a href="/">
            <p>Contato</p>
          </a>
        </li>
      </ul>
      <div>
        <button>Acessar</button>
      </div>
    </nav>
  );
}
