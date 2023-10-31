import React from "react";
import Navigation from "./src/congif/Navigation";
import { ConversionContextProvider } from "./src/util/ConversionContext";

export default () => (
  <ConversionContextProvider>
    <Navigation />
  </ConversionContextProvider>
);
