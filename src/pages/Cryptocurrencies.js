import React from 'react';
import Navbar from '../components/Navbar';
import Cryptos from '../components/Cryptos';

const Cryptocurrencies = () => {
  return (
    <div className="w-full flex max-md:flex-col text-white">
      <Navbar />
      <Cryptos />
    </div>
  );
};

export default Cryptocurrencies;
