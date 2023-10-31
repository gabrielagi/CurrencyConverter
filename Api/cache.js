const NodeCache = require("node-cache");

// Cache configuration with a lifespan of 1 hour (3600 seconds)
const cache = new NodeCache({ stdTTL: 3600 });

// Store data in the cache
const storeDataInCache = (key, data) => {
  console.log(
    "Esto recibo para almacenar en la cache",
    key,
    "y la data: ",
    data
  );
  cache.set(key, data);
};

// Retrieve data from the cache
const getDataFromCache = (key) => {
  console.log(
    "Esto recibo para mostrar lo que tengo almacenado en la cache",
    key
  );
  return cache.get(key);
};

module.exports = { storeDataInCache, getDataFromCache };
