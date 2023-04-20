const router = require('express').Router()
const ReservasCtrl = require('../controladores/reservasControlador')

router.get('/reservas', ReservasCtrl.apiGetAllReservas)
router.get('/reservas/:id', ReservasCtrl.apiGetReservaById)
router.post('/reservas', ReservasCtrl.apiAddReserva)
router.put('/reservas', ReservasCtrl.apiUpdateReserva)
router.delete('/reservas', ReservasCtrl.apiDeleteReserva)

module.exports = router
