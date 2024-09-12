const express = require("express");
const router = express.Router();

const mainController = require("../controllers/mainController");

//**Routes */

router.get("/", mainController.index);
router.get("/contacto", mainController.contacto);
router.post("/contacto", mainController.contactoPost);

module.exports = router;