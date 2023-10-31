const { getCurrency } = require("../controller/Currency");

const router = require("express").Router();

router.get("/", getCurrency);

module.exports = router;
