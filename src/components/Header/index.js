import React from 'react';
import './Header.css';
import { MenuItems } from './MenuItems';

export default function Header() {
  return (
    <nav className="Navbar">
      <img src="/" alt="logo" className="navbar-logo" />
      {MenuItems.map((item, index) => {
        return (
          <a href="/" key={index} className="navbar-menu">
            <p className={item.cname}>{item.text}</p>
          </a>
        );
      })}
      <button className="navbar-button">Acessar</button>
    </nav>
  );
}
