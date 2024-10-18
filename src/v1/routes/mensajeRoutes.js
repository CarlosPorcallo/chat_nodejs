const express = require("express");
const router = express.Router();

// se importan los controladores
const mensajeController = require("../controllers/mensajeController")

// se crea cada ruta
router.get("/mensaje", mensajeController.get_mensajes);
router.post("/mensaje", mensajeController.save_mensaje);

module.exports = router;