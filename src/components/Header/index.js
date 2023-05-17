import React from 'react';
import './Header.css';
import { MenuItems } from './MenuItems';

export default function Header() {
  return (
    <nav className="Navbar">
      <div className="navbar-logo">
        <img src="/" alt="logo" />
      </div>
      <div>
        {MenuItems.map((item, index) => {
          return (
            <a href="/" key={index} className="navbar-menu">
              <p className={item.cname}>{item.text}</p>
            </a>
          );
        })}
      </div>
      <button className="navbar-button">Acessar</button>
    </nav>
  );
}
