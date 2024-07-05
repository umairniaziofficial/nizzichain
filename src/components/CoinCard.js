import React from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';

const CoinCard = ({ top10Coins, handleCopyToClipboard, copied }) => {
  return (
    <div className="w-full grid max-md:grid-cols-1 grid-cols-2 gap-12">
      {/* Display top 10 coins */}
      {top10Coins.map((coin, index) => (
        <Link to={`/coin/${coin.uuid}`} key={coin.uuid} className="block">
        <div className="py-6 px-3 rounded-md shadow-lg bg-zinc-800 hover:bg-zinc-900 transition-colors">
          <div className="border-b border-zinc-800 mb-9 flex justify-between items-center">
            <div>
              <span>{index + 1}. </span>
              {coin.name} ({coin.symbol})
            </div>
            <img src={coin.iconUrl} alt={coin.name} className="w-8 h-8" />
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <span className="font-serif">Price: </span> $
              {parseFloat(coin.price).toFixed(2)}
            </div>
            <div>
              <span className="font-serif">Market Cap: </span> $
              {parseFloat(coin.marketCap).toLocaleString()}
            </div>
            <div>
              <span className="font-serif">Daily Change: </span> {coin.change}%
            </div>
            <div>
              <span className="font-serif">24h Volume: </span> $
              {millify(coin["24hVolume"])}
            </div>
            <div>
              <span className="font-serif">BTC Price: </span>{' '}
              {parseFloat(coin.btcPrice).toFixed(10)}
            </div>
            <div className="flex flex-col items-start gap-2">
              <span className="font-serif">Coinranking URL: </span>{' '}
              <a
                href={coin.coinrankingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                <button className="cursor-pointer bg-[#16c784] rounded-lg px-4 py-1 text-[#222222] hover:contrast-150">
                  View on Coinranking
                </button>
              </a>
            </div>
            <div className="flex flex-col items-start gap-2">
              <span className="font-serif">Contract Address: </span>{' '}
              <button
                className="cursor-pointer bg-[#486dfb] rounded-lg px-4 py-1 text-gray-100 hover:contrast-150"
                onClick={() =>
                  handleCopyToClipboard(coin.contractAddresses[0])
                }
              >
                {copied ? 'Copied!' : 'Copy to Clipboard'}
              </button>
            </div>
          </div>
        </div>
        </Link>))}
    </div>
  );
};

export default CoinCard;
