const router = require('express').Router()
const MesasCtrl = require('../controladores/mesasControlador')

router.get('/mesas', MesasCtrl.apiGetAllMesas)
router.get('/mesas/:id', MesasCtrl.apiGetMesasById)
router.post('/mesas', MesasCtrl.apiAddMesa)
router.put('/mesas/:id', MesasCtrl.apiUpdateMesa)
router.delete('/mesas/:id', MesasCtrl.apiDeleteMesa)

module.exports = router