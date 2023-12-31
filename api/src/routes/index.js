const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const routerVideo = require("./videoRouter");
const routerGenre = require("./genreRouter");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/videogames', routerVideo);
router.use('/genre', routerGenre);

module.exports = router;
