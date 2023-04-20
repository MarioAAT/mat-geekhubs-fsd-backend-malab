const { Router } = require('express');
const router = Router()

const usuarioRoutes = require('./rutas/rutas.usuario')
router.use(usuarioRoutes)

const mesasRoutes = require('./rutas/rutas.mesas')
router.use(mesasRoutes)

module.exports = router
