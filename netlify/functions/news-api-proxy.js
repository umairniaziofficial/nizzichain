const axios = require('axios');

exports.handler = async function(event, context) {
  const { searchQuery } = JSON.parse(event.body);
  const apiKey = process.env.REACT_APP_NEWS_API;
  const fromDate = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString().split('T')[0];

  const url = `https://newsapi.org/v2/everything?q=${searchQuery}&from=${fromDate}&sortBy=popularity&apiKey=${apiKey}`;

  try {
    const response = await axios.get(url);
    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
    };
  } catch (error) {
    return {
      statusCode: error.response ? error.response.status : 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};