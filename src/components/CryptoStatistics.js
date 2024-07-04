import React from 'react';
import millify from 'millify';

const CryptoStatistics = ({ stats }) => {
  return (
    <div className="w-full grid max-md:grid-cols-1 grid-cols-3 gap-12 mb-6">
      {/* Global crypto statistics */}
      <div className="col-span-3 py-6 px-3 rounded-md shadow-lg max-sm:col-span-1 bg-zinc-800">
        <div className="text-2xl text-center font-semibold mb-4">
          Global Crypto Statistics
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-zinc-800 rounded-md p-4 flex flex-col justify-center items-center">
            <div className="text-[#55fff5] text-2xl font-bold">
              {stats.totalCoins}
            </div>
            <div className="text-gray-300">Total Coins</div>
          </div>
          <div className="border border-zinc-800 rounded-md p-4 flex flex-col justify-center items-center">
            <div className="text-[#55fff5] text-2xl font-bold">
              {millify(stats.totalMarkets)}
            </div>
            <div className="text-gray-300">Total Markets</div>
          </div>
          <div className="border border-zinc-800 rounded-md p-4 flex flex-col justify-center items-center">
            <div className="text-[#55fff5] text-2xl font-bold">
              {stats.totalExchanges}
            </div>
            <div className="text-gray-300">Total Exchanges</div>
          </div>
          <div className="border border-zinc-800 rounded-md p-4 flex flex-col justify-center items-center">
            <div className="text-[#55fff5] text-2xl font-bold">
              ${millify(stats.totalMarketCap)}
            </div>
            <div className="text-gray-300">Total Market Cap</div>
          </div>
          <div className="border border-zinc-800 rounded-md p-4 flex flex-col justify-center items-center">
            <div className="text-[#55fff5] text-2xl font-bold">
              ${millify(stats.total24hVolume)}
            </div>
            <div className="text-gray-300">Total 24h Volume</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoStatistics;
