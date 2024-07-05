import React from 'react';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const defaultImageUrl = "https://s.yimg.com/ny/api/res/1.2/em_DXeOKMxLfzhBUZEOyMw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/bloomberg_politics_602/9209450c2874f32c1bf36c6c7b0794b5";

const NewCards = ({ searchQuery, count = 10, layout }) => {
  const { data: newsData, isFetching, error } = useGetCryptoNewsQuery({ searchQuery });

  if (isFetching) {
    return (
      <div className="h-screen w-full flex items-center justify-center flex-col">
        <div className="loader border-r-2 rounded-full border-yellow-500 bg-yellow-300 animate-bounce aspect-square w-8 flex justify-center items-center text-yellow-700">
          Loading...
        </div>
      </div>
    );
  }

  if (error) {
    console.error('API Error:', error);
    return (
      <div className="h-screen w-full flex items-center justify-center flex-col text-red-500">
        <p className="text-xl mb-4">Failed to load news. Please try again later.</p>
        <p className="text-sm">{error.message || 'Unknown error occurred'}</p>
      </div>
    );
  }
  

  if (!newsData?.articles?.length) {
    return (
      <div className="h-screen w-full flex items-center justify-center flex-col text-gray-400">
        <p className="text-xl mb-4">No news articles found for "{searchQuery}".</p>
      </div>
    );
  }

  const filteredArticles = newsData.articles.filter(article => !article.title.includes('[Removed]'));

  return (
    <div className={`w-full grid max-md:grid-cols-1 grid-cols-${layout} gap-12`}>
      {filteredArticles.slice(0, count).map((article, index) => (
        <div key={index} className="py-6 px-3 rounded-md shadow-lg bg-zinc-800">
          <div className="border-b border-zinc-800 mb-4 flex justify-between items-center">
            <div className="text-lg font-semibold text-white">{article.title}</div>
          </div>
          <div className="flex flex-col gap-4">
            <img
              src={article.urlToImage && article.urlToImage.startsWith('http') ? article.urlToImage : defaultImageUrl}
              alt={article.title}
              onError={(e) => {
                e.target.src = defaultImageUrl;
              }}
              className="rounded-md mb-2"
            />
            <div className="text-sm text-gray-300">{article.description}</div>
            <div className="text-xs text-gray-400">{new Date(article.publishedAt).toLocaleDateString()}</div>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-2"
            >
              <button className="cursor-pointer bg-[#16c784] rounded-lg px-4 py-1 text-[#222222] hover:contrast-150">
                Read More
              </button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewCards;
