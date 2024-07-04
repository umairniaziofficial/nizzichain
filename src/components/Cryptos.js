import React, { useState, useEffect } from 'react';
import CoinCard from './CoinCard';
import Search from './Search';
import { useGetCryptosQuery } from '../services/cryptoApi';

const Cryptos = () => {
  const { data, isFetching } = useGetCryptosQuery();
  const [filteredCoins, setFilteredCoins] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (!isFetching && data?.data?.coins) {
      const allCoins = data.data.coins;
      setFilteredCoins(allCoins);
    }
  }, [data, isFetching]);

  useEffect(() => {
    if (data?.data?.coins) {
      const filtered = data.data.coins.filter(
        (coin) =>
          coin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          coin.symbol.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredCoins(filtered);
    }
  }, [searchQuery, data]);

  if (isFetching) {
    return (
      <div className="h-screen w-full flex items-center justify-center flex-col">
        <div className="loader border-r-2 rounded-full border-yellow-500 bg-yellow-300 animate-bounce aspect-square w-8 flex justify-center items-center text-yellow-700">
          $
        </div>
      </div>
    );
  }


  return (
    <div className="w-full max-w-[80%] mx-auto py-6">
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {filteredCoins.length === 0 ? (
        <div className="text-center text-gray-400 mt-4">No results found</div>
      ) : (
        <CoinCard top10Coins={filteredCoins} />
      )}
    </div>
  );
};

export default Cryptos;