const express = require("express");
const router = express.Router();

const mainController = require("../controllers/mainController");

//**Routes */

router.get("/", mainController.index);
router.get("/contacto", mainController.contact);
// router.post("/contacto", mainController.contactoPost);
router.get("/perfil", mainController.perfil);

module.exports = router;