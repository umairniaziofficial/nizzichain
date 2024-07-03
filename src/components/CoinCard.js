import React from "react";

const CoinCard = () => {
  const CoinList = ["Coin1", "Coin2", "Coin3", "Coin4",'Coin5','Coin5','Coin5','Coin5'];
  return (
    <div className="w-full grid max-md:grid-cols-1 grid-cols-3 gap-12  ">
      {CoinList.map((item, index) => (
        <div className=" py-6 px-3 rounded-md shadow-l bg-zinc-800">
          <div className="border-b border-zinc-800 mb-9 flex justify-between">
            <div>
              <span>{index + 1}. </span>
              {item}
            </div>
            <img src="placeholder" alt="Coin" />
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <span className="font-seif">Price: </span> {item.price}
            </div>
            <div>
              <span className="font-seif">Market Cap: </span> {item.price}
            </div>
            <div>
              <span className="font-seif">Daily Change: </span> {item.price}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoinCard;
