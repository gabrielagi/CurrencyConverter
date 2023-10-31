require("dotenv").config();
const axios = require("axios");
const apiKey = process.env.API_KEY;
const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/`;
const { storeDataInCache, getDataFromCache } = require("../../cache"); // Import functions from cache.js

const getCurrency = async (req, res) => {
  const { baseCurrency } = req.query;

  if (!baseCurrency) {
    return res
      .status(400)
      .json({ error: "The 'baseCurrency' parameter is required." });
  }

  // Attempt to retrieve the data from the cache
  const cachedData = getDataFromCache(baseCurrency);

  if (cachedData) {
    console.log("Ya tengo almacenada esta currency", cachedData);
    // If the data is in the cache, return it directly
    return res.status(200).json(cachedData);
  }
  console.log("NO tengo almacenada esta currency", cachedData);

  try {
    const { data } = await axios(`${apiUrl}USD`);
    if (data.result === "success") {
      // Format the date
      const fullDate = data.time_last_update_utc;
      const datePart = fullDate.substring(0, 16);

      // Get exchange rates in relation to the provided base currency
      const baseRates = data.conversion_rates;

      // Check if the provided base currency is in the rates list
      if (baseRates[baseCurrency]) {
        const responseData = {
          base: baseCurrency,
          date: datePart,
          rates: { [baseCurrency]: 1, ...baseRates },
        };

        // Store the data in the cache before returning it.
        storeDataInCache(baseCurrency, responseData);

        res.status(200).json(responseData);
      } else {
        res.status(400).json({ error: "Invalid base currency." });
      }
    } else {
      res.status(500).json({ error: "The API request was not successful." });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "There was an error fetching data from the API." });
  }
};

module.exports = {
  getCurrency,
};
