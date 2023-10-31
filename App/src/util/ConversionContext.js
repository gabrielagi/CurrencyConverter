import React, { createContext, useState, useEffect } from "react";
import { Alert } from "react-native";
import axios from "axios";

// import { api } from "./api"; With a backend implemented we don't need a api in our front

export const ConversionContext = createContext();

const DEFAULT_BASE_CURRENCY = "USD";
const DEFAULT_QUOTE_CURRENCY = "GBP";

export const ConversionContextProvider = ({ children }) => {
  const [baseCurrency, _setBaseCurrency] = useState(DEFAULT_BASE_CURRENCY);
  const [quoteCurrency, _setQuoteCurrency] = useState(DEFAULT_QUOTE_CURRENCY);
  const [date, setDate] = useState("");
  const [rates, setRates] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const setBaseCurrency = (currency) => {
    _setBaseCurrency(currency);
  };

  const setQuoteCurrency = (currency) => {
    _setQuoteCurrency(currency);
  };

  useEffect(() => {
    setIsLoading(true);

    // In case we want to use a default api in our front
    // return api(`/latest?base=${currency}`)
    //   .then((res) => {
    //     _setBaseCurrency(currency);
    //     setDate(res.date);
    //     setRates(res.rates);
    //   })
    //   .catch((error) => {
    //     Alert.alert("Sorry, something went wrong.", error.message);
    //   })
    //   .finally(() => {
    //     setIsLoading(false);
    //   });

    axios
      .get(`http://localhost:3001/currencyconvert?baseCurrency=${baseCurrency}`)
      .then((response) => {
        const data = response.data;
        setDate(data.date);
        setRates(data.rates);
      })
      .catch((error) => {
        Alert.alert("Sorry, something went wrong.", error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [baseCurrency]); // Esta función se ejecutará solo cuando baseCurrency cambie

  const swapCurrencies = () => {
    setBaseCurrency(quoteCurrency);
    setQuoteCurrency(baseCurrency);
  };

  useEffect(() => {
    setBaseCurrency(DEFAULT_BASE_CURRENCY);
  }, []);

  const contextValue = {
    baseCurrency,
    quoteCurrency,
    setBaseCurrency,
    setQuoteCurrency,
    swapCurrencies,
    date,
    rates,
    isLoading,
  };

  return (
    <ConversionContext.Provider value={contextValue}>
      {children}
    </ConversionContext.Provider>
  );
};
