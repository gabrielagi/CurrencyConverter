require("dotenv").config();
const axios = require("axios");
const apiKey = process.env.API_KEY;
const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/`;
const { parse, format } = require("date-fns");

const getCurrency = async (req, res) => {
  const { baseCurrency } = req.query;

  if (!baseCurrency) {
    return res
      .status(400)
      .json({ error: "The 'baseCurrency' parameter is required." });
  }

  try {
    const { data } = await axios(`${apiUrl}USD`);
    if (data.result === "success") {
      // Format the date
      console.log("Date:", data.time_last_update_utc);
      const fullDate = data.time_last_update_utc;
      const datePart = fullDate.substring(0, 16);

      console.log(datePart);

      // Get exchange rates in relation to the provided base currency
      const baseRates = data.conversion_rates;

      // Check if the provided base currency is in the rates list
      if (baseRates[baseCurrency]) {
        res.status(200).json({
          base: baseCurrency,
          date: datePart,
          rates: { [baseCurrency]: 1, ...baseRates },
        });
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
