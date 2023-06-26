import React, { Component } from 'react';
import './Header.css';
import { MenuItems } from './MenuItems';
import { animateScroll as scroll, Link } from 'react-scroll';
import Logo from '../../assets/logo.svg';

export default class Header extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  render() {
    return (
      <section className="Header">
        <nav className="Navbar">
          <div className="navbar-logo">
            <img src={Logo} alt="logo" onClick={this.scrollToTop} />
          </div>
          <div>
            {MenuItems.map((item, index) => {
              return (
                <Link
                  key={index}
                  className="navbar-menu"
                  activeClass="navbar-menu"
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-185}
                  duration={1000}
                >
                  <p className={item.cname}>{item.text}</p>
                </Link>
              );
            })}
          </div>
          <div>
            <button className="navbar-button">Acessar</button>
          </div>
        </nav>
      </section>
    );
  }
}
