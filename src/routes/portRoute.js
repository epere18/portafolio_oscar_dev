const express = require("express");
const router = express.Router();

const portController = require("../controllers/portController");

//**Routes */

router.get("/", portController.port);

module.exports = router;