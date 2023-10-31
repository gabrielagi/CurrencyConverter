const server = require("./src/app.js");
const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`The server is listening in Port: ${PORT}`);
});
