const User = require("./../models/User")
const bcryptjs = require("bcryptjs")

exports.viewRegister = (req,res) => {
    res.render("auth/signup")
}

exports.register = async (req, res) => {

    // 1. Obtención de datos del formulario
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password

    // 2. Encriptación de password. Antes de subirlo a la base de datos. NO OLVIDAR JAMÁS.

    //bcrypt - cada vez que se quiere hacer una encriptación, se le dice al servidor cuantas veces queremos que revuelva el password y lo regresa en "salt", regresa un texto plano

    const salt = await bcryptjs.genSalt(10)
    const passwordEncriptado = await bcryptjs.hash(password, salt)

    // No se puede devolver en password de un passwordEncriptado

    const newUser = await User.create ({
        username,
        email,
        passwordEncriptado
    })

    console.log(newUser)

    // 3. Redirección del usuario
    res.redirect("/")

}

