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

    // => Validación 1. 
    // Verificar que username, email y password, tengan contenido, que no lleguen vacíos.

    if(!username || !email || !password) {
        res.render("auth/signup", {
            errorMessage: "Uno o más campos están vacíos, revísalos nuevamente"
        })

        return

    }

    // => Validación 2. Fortalecimiento de password.
    // Verificar que el password tenga 6 caracteres y al menos una mayúscula.

    const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/

    // regex. conjunto de reglas que auditan un texto plano. El método viene implícito en JS

    if(!regex.test(password)){
        res.render("auth/signup", {
            errorMessage: "Tu password debe contener 6 caracteres, mínimo un número y una mayúscula"
        })

        return
    }

    // => Validación 3. 
    // Verificar que el mail sea un mail.

    // en el modelo de User, si hay algún problema con esta validación, hay que poner que si existe un error en la BD hay que usar un formato llamado try, catch. Si llega a haber un error en una aplicación tercera, pasa directo al cathc para verificar el error.

    try {

        const salt = await bcryptjs.genSalt(10)
		const passwordEncriptado = await bcryptjs.hash(password, salt)
		
		const newUser = await User.create({
			username,
			email,
			passwordEncriptado
		}) 

		console.log(newUser)
		
		// 3. REDIRECCIÓN DE USUARIO
		res.redirect("/")

    } catch (error) {
        // códigos de estado del servidor, dentro de la petición API o los datos, para informarle al usuario.
        console.log(error)
        res.status(500).render("auth/signup", {
            errorMessage: "Hubo un error con la validación de tu correo, intenta nuevamente, no dejes espacios y usa minúsculas"
        }) 
        


    }



    // 2. Encriptación de password. Antes de subirlo a la base de datos. NO OLVIDAR JAMÁS.

    //bcrypt - cada vez que se quiere hacer una encriptación, se le dice al servidor cuantas veces queremos que revuelva el password y lo regresa en "salt", regresa un texto plano
    /* Esto va a arriba en el try -catch
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
    res.redirect("/")*/

}

