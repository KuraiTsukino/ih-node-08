// 1. Importaciones

const mongoose = require("mongoose")

// 2. Schema

const userSchema = mongoose.Schema({
    username: String,
    email: {
        type: String,
        required: [true, "Email es requerido."],
        match: [/^\S+@\S+\.\S+$/, "Por favor, ingresa un email válido."],
        unique: true, // email único en la base de datos
        lowercase: true, // en minúsculas
        trim: true // sin espacios vacíos
    },
    passwordEncriptado: String
})

// 3. Modelo

const User = mongoose.model("User", userSchema)

// 4. Exportación

module.exports = User