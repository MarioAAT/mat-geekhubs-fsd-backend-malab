const { Router } = require('express');
const router = Router()

const usuarioRoutes = require('./rutas/rutas.usuario')
router.use(usuarioRoutes)

const mesasRoutes = require('./rutas/rutas.mesas')
router.use(mesasRoutes)

const reservasRoutes = require('./rutas/rutas.reservas')
router.use(reservasRoutes)

const autRoutes = require('./rutas/rutas.aut')
router.use(autRoutes)

module.exports = router
