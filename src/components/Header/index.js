import React from 'react';
import './Header.css';
import { MenuItems } from './MenuItems';
import { Link } from 'react-scroll';

export default function Header() {
  return (
    <nav className="Navbar">
      <div className="navbar-logo">
        <Link
          to="home"
          activeClass="active"
          spy="true"
          smooth={true}
          offset={-180}
          duration={1000}
        >
          <img src="/" alt="logo" />
        </Link>
      </div>
      <div>
        {MenuItems.map((item, index) => {
          return (
            <Link
              key={index}
              className="navbar-menu"
              activeClass="active"
              to={item.id}
              spy={true}
              smooth={true}
              offset={-180}
              duration={1000}
            >
              <p className={item.cname}>{item.text}</p>
            </Link>
          );
        })}
      </div>
      <button className="navbar-button">Acessar</button>
    </nav>
  );
}
