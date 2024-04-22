import React from 'react';
import '../css/Intro.css';
import Navbar from './Navbar';
import introDog from '../assets/intro-dog.png';

const Intro = () => {
  return (
    <>
      <Navbar />
      <section className="intro-bg">
        <div className="intro-container">
          <div className="content-flex">
            <div></div>
            <div className="intro-text">
              <h1>PLUTO ON SOL</h1>
              <p>
                Pluto, the biggest & the best dog of all time joined SOLANA's
                network to show what it's like to be a “real” dog.
              </p>
              <button><a href="https://www.pinksale.finance/solana/launchpad/DZ5RxTPasHnQthCt2FsHKn2J21oBzexPLsEi2nCMqt2V" target="_blank">BUY $PLTO</a></button>
            </div>
            <div className="intro-dog">
              <img src={introDog} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
