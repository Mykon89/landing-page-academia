import React from 'react';
import './components.css';
import NavLogo from '../assets/logo.png';

const Navbar = () => {
  const MenuItems = [
    { text: 'Sobre', id: 'sobre', href: '#sobre', cname: 'nav-links' },
    { text: 'Produto', id: 'produto', href: '#produto', cname: 'nav-links' },
    { text: 'Contato', id: 'contato', href: '#contato', cname: 'nav-links' },
  ];

  return (
    <header>
      <img src={NavLogo} alt="logo" className="navbar-logo" />
      <nav className="navigation">
        {MenuItems.map((item, index) => {
          return (
            <a href={item.href} className={item.cname} key={index}>
              {item.text}
            </a>
          );
        })}

        <a
          href="https://gym-dev.com/academia/"
          target="_blank"
          rel="noreferrer"
        >
          <button className="btn-login">Acessar</button>
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
