const server = require("./src/app.js");
const PORT = process.env.PORT || 3001; // Puerto en el que escuchará el servidor

// Syncing all the models at once.
server.listen(PORT, () => {
  console.log(`El servidor está escuchando en el puerto ${PORT}`);
});
