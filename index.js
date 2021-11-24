// 1. Importaciones

const express = require("express")
const app = express()

const hbs = require("hbs")

const connectDB = require("./config/db")

require("dotenv").config()

// 2. Middleware
app.use(express.static("public"))

app.set("views", __dirname + "/views")
app.set("view engine", "hbs")

hbs.registerPartials(__dirname + "/views/partials")

// manejo de formularios

app.use(express.urlencoded({extended: true}))

connectDB()

// 3. Rutas
app.use("/auth", require("./routes/auth"))
app.use("/users", require("./routes/users"))
app.use("/", require("./routes/index"))

// 4. Servidor
app.listen(process.env.PORT, () => {
    console.log(`Servidor activado en puerto http://localhost:${process.env.PORT}`)
})