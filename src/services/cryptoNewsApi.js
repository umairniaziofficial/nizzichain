import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://newsapi.org/v2/";

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ searchQuery }) => ({
        url: `/everything`,
        params: {
          q: searchQuery,
          from: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString().split('T')[0], 
          sortBy: "popularity",
          apiKey: process.env.REACT_APP_NEWS_API,
        },
      }),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
