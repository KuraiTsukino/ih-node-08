# 1. Creación de Login y gestión de sesiones.

- Sesiones
Para saber si está logueado o no en una página y se mantiene en el tiempo. Persistencia de identidad.

## a. Creación de vista Login.

## b. Crear la ruta GET de Login.

## c. Crear la ruta POST de Login.
    
    - Realizar parcialmente la ruta con verificación de contraseña
    - Creación de archivo "sesión" (session.js)
        - express-session
        - mongoconnect
    - Integrarlo en index.js
    - Integrarlo directamente en la ruta de POST
    - Verificar sesión en navegador (cookiie) y MongoDB (session)

## d. Cerrar sesión.

    - Arreglos en el Header del proyecto y su <nav>
    - Ruteo de POST para cerrar sesión.

## e. Patrón de autorización. (Áreas privadas de la plataforma.)

 Para poder permitir al usuario usar el perfil privado, para el comercio electrónico, usuarios premium.

 - Determinación de roles

 Roles visitantes: En la plataforma, sin hacer un login.
 Roles usuarios: Está registrada en la plataforma.
 Roles clientes: Está registrada e hizo una transacción $$.

- Route-guard (isLoggedIn vs isLoggedOut)
Protección de rutas.

- Verificar que en el Header aparezca un "Hola {{nombre}}"