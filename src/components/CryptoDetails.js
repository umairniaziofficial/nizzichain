import React, { useState } from "react";
import { useGetCryptosQuery } from "../services/cryptoApi";
import CoinCard from "./CoinCard";
import CryptoStatistics from "./CryptoStatistics";

const CryptoDetails = () => {
  const { data, isFetching } = useGetCryptosQuery();
  const [copied, setCopied] = useState(false);

  if (isFetching) {
    return (
      <div className="h-screen w-full flex items-center justify-center flex-col">
        <div className="loader border-r-2 rounded-full border-yellow-500 bg-yellow-300 animate-bounce aspect-square w-8 flex justify-center items-center text-yellow-700">
          $
        </div>
      </div>
    );
  }

  const coins = data?.data?.coins || [];
  const stats = data?.data?.stats || {};

  const top10Coins = coins.slice(0, 10);

  const handleCopyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => setCopied(true))
      .catch((err) => console.error("Failed to copy:", err));
  };

  return ( 
    <div className="w-full max-w-[80%] mx-auto py-8">
      <CryptoStatistics stats={stats} />
      <div className="text-2xl text-center font-semibold mb-6">
        Top 10 Crypto Coins 
      </div>
      <CoinCard top10Coins={top10Coins} handleCopyToClipboard={handleCopyToClipboard} copied={copied}  />
    </div>
  );
};

export default CryptoDetails;
