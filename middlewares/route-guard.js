// Verificación de ruta. Cada vez que entre a alguna página se hará una verificación

// Áreas privadas, el usuario debe estar loggeado para acceder

const usuarioLoggeado = (req, res, next) => {
    // evaluar si el usuario no esta loggeado, si no está loggeado enviarlo al login.
    if(!req.session.currentUser) {
        res.redirect("/auth/login")
        return
    }
    // tercera propiedad del req, res, next
    // Si está loggeado enviarlo a la siguiente función.
    next()

}

//Áreas de autenticación, el usuario ya se autenticó y quiere entrar a las áreas de Sign up y login, por lo tanto se redigire a Home, si no está autentificado lo deja seguir.
const usuarioNoLoggeado = (req, res, next) => {

    // evaluar si está autenticado, si lo está se va al home, si no, se va al next y pasa al sign up

    if(req.session.currentUser) {
        return res.redirect("/")
    }

    next()

}

// Exportación

module.exports = {
    usuarioLoggeado,
    usuarioNoLoggeado
}