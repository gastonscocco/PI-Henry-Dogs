
const router = require('express').Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// Importamos ambos archivos de routes
const dogs = require('./dogs');
const temperaments = require('./temperaments');


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/dogs', dogs);
router.use('/temperaments', temperaments);

// ^ Indicamos que se utilicen en tales rutas ^

module.exports = router;
