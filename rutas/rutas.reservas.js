const router = require('express').Router()
const ReservasCtrl = require('../controladores/reservasControlador')
const verifyToken = require('../middlewares/verifyToken')
const isAdmin = require('../middlewares/privAdmin')

router.get('/reservas', verifyToken, isAdmin, ReservasCtrl.apiGetAllReservas)
router.get('/reservas/usuarios', verifyToken, ReservasCtrl.apiGetReservaById)
router.post('/nuevareserva', verifyToken, ReservasCtrl.apiAddReserva)
router.put('/reservas/:id', verifyToken, ReservasCtrl.apiUpdateReserva)
router.delete('/reservas/:id', verifyToken, ReservasCtrl.apiDeleteReserva)
router.get('/reservas/usuario', verifyToken, ReservasCtrl.getReservaUsuario)


module.exports = router
