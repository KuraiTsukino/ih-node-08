// 1. Importación

const express = require("express")
const router = express.Router()

const usersController = require("./../controllers/usersController")
// Ruta relativa
const routeGuard = require("./../middlewares/route-guard")
console.log("El routeguard importado es: ", routeGuard.usuarioLoggeado)

// 2. Rutas.
router.get("/profile", routeGuard.usuarioLoggeado, usersController.profile)

// que el usuario cree una cuenta, patrón de autenticación, verificar la identificación de una persona.

module.exports = router