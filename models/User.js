// 1. Importaciones

const mongoose = require("mongoose")

// 2. Schema

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    passwordEncriptado: String
})

// 3. Modelo

const User = mongoose.model("User", userSchema)

// 4. Exportación

module.exports = User