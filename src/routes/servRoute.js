const express = require("express");
const router = express.Router();

const servController = require("../controllers/servController");

//**Routes */

router.get("/", servController.service);


module.exports = router;
