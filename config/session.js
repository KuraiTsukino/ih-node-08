// Se configura antes de meter la ruta. Todo esto se copia y pega, ya no hay que moverlo después

// Gestión de la sesión.

// Configuración, tiempo de expiración de la sesión.

// 1. Importaciones.

const session = require("express-session")
const MongoStore = require("connect-mongo")

// 2. Gestión de sesión.

const sessionManager = (app) => {

    console.log("Activando y gestionando sesiones")

    // a. Establecer seguridad y flexibilidad ante servidores externos puntualmente Cloud.
    app.set("trust proxy", 1)
    // da flexibilidad a Heroku, confiar en los elementos cloud.

    // b. Establecer la configuración de la sesión.
    app.use(session({
        // 5 propiedades

        // se añade a la sesión una palabra secreta para mayor seguridad a la sesión. Mayúscula, minúsculas y del cero al nueve. Para coincidir en el servidor 
        secret: process.env.SESSION, // No se sube a Github
        resave: true, // tan pronto nosotros borramos una cookie, pero se vuelve a hacer un login del navegador, se forza, por si hay algún error, se reintegra la cookie, siempre es true.
        saveUninitialized: false, // si no hay una cookie, hasta que se hace un registro se hace una cookie, es parte de esta configuración.
        cookie: { // es un archivo único que se genera en el servidor con los datos elegidos del usuario, se envía parcialmente una copia a la BD y la cookie se envía al cliente. Se inserta en el header. Tiene dos propiedades.
            httpOnly: true, // Evita ataques de inyecciones, ataque al servidor, si hay algo simultáneamente, detiene la cookie del servidor. Feature adicional para evitar ataques XSS.
            maxAge: 86400000 // Expiración del token, se expresa en milisegundos, cookie de un día. => 1000*60*60*24

        },

        // Gestión de la fotocopia en MOngoDB a través de una colección llamada sesiones.
        store: MongoStore.create({
            mongoUrl: process.env.MONGODB_URI
        })
    }))

}
// Al invocar sessionManager se tiene que pasar un argumento
// 3. Exportación.

module.exports = sessionManager