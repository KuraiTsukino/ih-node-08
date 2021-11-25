// 1. Importaciones

const express = require("express")
const router = express.Router()

const authController = require("./../controllers/authController")

// Crear usuario. 
// Mostrar formulario
router.get("/signup", authController.viewRegister)

// Enviar datos a la BD del formulario.
router.post ("/signup", authController.register)

// Iniciar sesión.
// a. Mostrar el formulario
router.get("/login", authController.viewLogin)

// b. Manejo de formulario.
router.post("/login", authController.login)

// Cerrar sesión.
router.post("/logout", authController.logout)

// Exportación

module.exports = router