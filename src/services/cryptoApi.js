import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://coinranking1.p.rapidapi.com"; 
const apiHeaders = {
  "x-rapidapi-key": process.env.REACT_APP_RAPID_API,
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "Content-Type": "application/json"
};
  
const createRequest = (url) => ({
  url,
  headers: apiHeaders
});

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }), 
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest("/coins")
    })
  })
});

export const { useGetCryptosQuery } = cryptoApi; 



