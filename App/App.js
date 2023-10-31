import React from "react";
import Navigation from "./src/congif/Navigation";
import { ConversionContextProvider } from "./src/util/ConversionContext";

import { api } from "./src/util/api";

api("/latest?base=USD")
  .then((res) => console.log(res))
  .catch((err) => console.log("err", err));

export default () => (
  <ConversionContextProvider>
    <Navigation />
  </ConversionContextProvider>
);
