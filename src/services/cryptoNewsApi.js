import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = process.env.NODE_ENV === 'development' 
  ? "https://newsapi.org/v2/" 
  : "/.netlify/functions/";

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ searchQuery }) => {
        if (process.env.NODE_ENV === 'development') {
          return {
            url: `/everything`,
            params: {
              q: searchQuery,
              from: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString().split('T')[0],
              sortBy: "popularity",
              apiKey: process.env.REACT_APP_NEWS_API,
            },
          };
        } else {
          return {
            url: 'news-api-proxy',
            method: 'POST',
            body: { searchQuery }
          };
        }
      },
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;