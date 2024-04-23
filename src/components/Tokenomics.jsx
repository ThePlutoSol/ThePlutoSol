import React from 'react';
import pizzaDesktop from '../assets/tokenomics-pizza.png';
import pizzaMobile from '../assets/tokenomics-pizza-mobile.png';
import '../css/Tokenomics.css';
import CopyToClipboardButton from '../scripts/CopyToClipboardButton';

const Tokenomics = () => {
  return (
    <section id="tokenomics" className="tokenomics-bg">
      <div className="tokenomics-container">
        <div className="tokenomics-ghost"></div>
        <img className="pizza-desktop" src={pizzaDesktop} alt="" />
        <img className="pizza-mobile" src={pizzaMobile} alt="" />
        <div className="tokenomics-desc">
          <div className="tokenomics-contract">
            <h2>PLUTOKENOMICS</h2>
            <p>° 70% liquidity + pre sale</p>
            <p>° 20% Cex's listing</p>
            <p>° 10% Marketing</p>
            <br></br>
            <h2>CONTRACT ADDRESS</h2>
            <p>Token symbol:</p>
            <span>$PLTO</span>
            <p>Token address:</p>
            <div className='contract-address'>
              <span className="token-address tk-mobile">
                AXSNk...phUxwg
              </span>
              <span className="token-address tk-web">
                AXSNkxNVWAU4tPFHGqaYuxzqdEkoDGy8DTusMfphUxwg
              </span>
              <CopyToClipboardButton text="AXSNkxNVWAU4tPFHGqaYuxzqdEkoDGy8DTusMfphUxwg"/>
            </div>
            <p>Token supply:</p>
            <span>999 999 999</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;