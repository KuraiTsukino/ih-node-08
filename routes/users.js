const express = require("express")
const router = express.Router()

const usersController = require("./../controllers/usersController")

router.get("/", usersController.register)

// que el usuario cree una cuenta, patrón de autenticación, verificar la identificación de una persona.

module.exports = router