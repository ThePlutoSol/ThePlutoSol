import React from 'react';
import '../css/Navbar.css';
import logo from '../assets/logo-pluto.svg'

const Navbar = () => {
  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="navContent">
        <ul className="navList">
          <li>
            <button onClick={() => scrollToElement('about')}>ABOUT</button>
          </li>
          <li>
            <button onClick={() => scrollToElement('howToBuy')}>HOW TO BUY</button>
          </li>
          <li>
            <button onClick={() => scrollToElement('tokenomics')}>TOKENOMICS</button>
          </li>
        </ul>
        <div className="btn-buy">
          <a href="https://jup.ag/swap/SOL-AXSNkxNVWAU4tPFHGqaYuxzqdEkoDGy8DTusMfphUxwg" target="_blank">BUY</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
