// const { login } = require("../controllers/login");
// const { getCharById } = require("../controllers/getCharById");
// const { postFav, deleteFav } = require("../controllers/handleFavorites");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("¡Hola, mundo desde el servidor!");
});

module.exports = router;
