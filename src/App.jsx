import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Intro from './components/Intro';
import About from './components/About';
import HowToBuy from './components/HowToBuy';
import Tokenomics from './components/Tokenomics';
import Footer from './components/Footer';
import Partners from './components/Partners';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Intro />
        <About />
        <HowToBuy />
        <Tokenomics />
        <Partners />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
