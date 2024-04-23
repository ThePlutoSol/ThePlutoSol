import React from 'react';
import howToBuyDog from '../assets/howToBuy-dog.png';

import '../css/HowToBuy.css';

const HowToBuy = () => {
  return (
    <section id="howToBuy" className="howToBuy-bg">
      <h1>HOW TO BUY</h1>
      <div className="howToBuy-container">
        <div className="howToBuy-ghost"></div>
        <div
          className="howToBuy-desc
      "
        >
          <h2>1.CONNECT YOUR WALLET</h2>
          <p>Have an solana wallet in your device (Phantom, Solflare)</p>
          <h2>2.HAVE $SOL IN YOUR WALLET</h2>
          <p>Have some $SOL in your wallet to pay network fees.</p>
          <h2>3.VISIT OUR TOKEN IN PINKSALE</h2>
          <p>Visit our token in pinksale and buy in the pre sale.</p>
          <button>
            <a
              href="https://www.pinksale.finance/solana/launchpad/DZ5RxTPasHnQthCt2FsHKn2J21oBzexPLsEi2nCMqt2V"
              target="_blank"
            >
              BUY $PLTO
            </a>
          </button>
        </div>
        <div className="mobile-btn">
          <button>
            <a
              href="https://www.pinksale.finance/solana/launchpad/DZ5RxTPasHnQthCt2FsHKn2J21oBzexPLsEi2nCMqt2V"
              target="_blank"
            >
              BUY $PLTO
            </a>
          </button>
        </div>
        <div className="howToBuy-dog">
          <img src={howToBuyDog} alt="" />
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;
