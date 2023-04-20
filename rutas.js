const { Router } = require('express');
const router = Router()

const usuarioRoutes = require('./rutas/rutas.usuario')
router.use(usuarioRoutes)

module.exports = router
