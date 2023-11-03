const express = require("express");
const server = express();
const router = require("./src/routes/index");
const morgan = require("morgan");

// Importa el paquete cors
const cors = require("cors");

server.use(express.json());
server.use(morgan("dev"));

// Configura CORS
server.use(
  cors({
    origin: "*",
    credentials: true,
    methods: "GET, POST, OPTIONS, PUT, DELETE",
    allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept",
  })
);

// Accede a la ruta
server.use("/currencyconvert", router);

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`The server is listening on Port: ${PORT}`);
});
