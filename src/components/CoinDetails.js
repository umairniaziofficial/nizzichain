import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGetCoinDetailsQuery, useGetCoinHistoryQuery } from '../services/cryptoApi';
import { Line } from 'react-chartjs-2';
import millify from 'millify';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const timeperiods = ['1h', '3h', '12h', '24h', '7d', '30d', '3m', '1y', '3y', '5y'];

const CoinDetails = () => {
  const { coinId } = useParams();
  const [timeperiod, setTimeperiod] = useState('1h');
  const { 
    data: coinDetails, 
    isFetching: isCoinDetailsFetching, 
    error: coinDetailsError 
  } = useGetCoinDetailsQuery(coinId);
  const { 
    data: coinHistory, 
    isFetching: isCoinHistoryFetching, 
    error: coinHistoryError 
  } = useGetCoinHistoryQuery({ coinId, timeperiod });

  if (isCoinDetailsFetching || isCoinHistoryFetching) {
    return <div className="text-white text-center mt-8">Loading...</div>;
  }

  if (coinDetailsError || coinHistoryError) {
    return <div className="text-red-500 text-center mt-8">Error: {coinDetailsError?.message || coinHistoryError?.message}</div>;
  }

  const coin = coinDetails?.data?.coin || {};
  const history = coinHistory?.data?.history || [];

  const sortedHistory = [...history].sort((a, b) => a.timestamp - b.timestamp);

  const chartData = {
    labels: sortedHistory.map((item) => {
      const date = new Date(item.timestamp * 1000);
      return timeperiod === '1h' || timeperiod === '3h' || timeperiod === '12h' 
        ? date.toLocaleTimeString() 
        : date.toLocaleDateString();
    }),
    datasets: [
      {
        label: 'Price in USD',
        data: sortedHistory.map((item) => item.price),
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          color: 'rgba(200, 200, 200, 0.3)',
        },
        ticks: {
          color: '#333',
          maxTicksLimit: 6,
        },
      },
      y: {
        grid: {
          color: 'rgba(200, 200, 200, 0.3)',
        },
        ticks: {
          color: '#333',
          callback: (value) => `$${value.toLocaleString()}`,
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: '#333',
        },
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  };

  return (
    <div className="w-full max-w-[80%] mx-auto py-8 text-white">
      <h3 className='text-2xl pb-6'>
      <Link to="/" className="flex items-center text-blue-500 hover:text-blue-700">
        <svg className="w-6 h-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        Back
      </Link>
      </h3>
      <h2 className="text-3xl font-bold mb-4">{coin.name} ({coin.symbol})</h2>
      <div className="mb-4">
        <select
          className="bg-gray-700 text-white p-2 rounded"
          value={timeperiod}
          onChange={(e) => setTimeperiod(e.target.value)}
        >
          {timeperiods.map((period) => (
            <option key={period} value={period}>{period}</option>
          ))}
        </select>
      </div>
      <div className="mb-8 bg-white p-4 rounded-lg shadow-lg">
        <div style={{ height: '400px' }}>
          <Line data={chartData} options={chartOptions} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className='bg-zinc-700 px-3 py-2 rounded-lg drop-shadow-md'>
          <h3 className="text-2xl font-semibold mb-4">Price Statistics</h3>
          <div className="space-y-2">
            <p>Price: ${parseFloat(coin.price).toFixed(2)}</p>
            <p>Market Cap: ${millify(coin.marketCap)}</p>
            <p>24h Volume: ${millify(coin['24hVolume'])}</p>
            <p>All-time high: ${millify(coin.allTimeHigh?.price)}</p>
          </div>
        </div>
        <div className='bg-zinc-700 px-3 py-2 rounded-lg drop-shadow-md'>
          <h3 className="text-2xl font-semibold mb-4">Other Information</h3>
          <div className="space-y-2 ">
            <p>Number of Markets: {coin.numberOfMarkets}</p>
            <p>Number of Exchanges: {coin.numberOfExchanges}</p>
            <p>Approved Supply: {coin.supply?.confirmed ? 'Yes' : 'No'}</p>
            <p>Total Supply: {coin.supply?.total ? millify(coin.supply.total) : 'N/A'}</p>
            <p>Circulating Supply: {coin.supply?.circulating ? millify(coin.supply.circulating) : 'N/A'}</p>
          </div>
        </div>
      </div>
      <div className="mt-8 bg-zinc-700 px-3 py-2 rounded-lg drop-shadow-md">
        <h3 className="text-2xl font-semibold mb-4">About {coin.name}</h3>
        <p className="whitespace-pre-wrap">{coin.description}</p>
      </div>
    </div>
  );
};

export default CoinDetails;