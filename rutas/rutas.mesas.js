const router = require('express').Router()
const MesasCtrl = require('../controladores/mesasControlador')
const verifyToken = require('../middlewares/verifyToken')
const isAdmin = require('../middlewares/privAdmin')

router.get('/mesas', MesasCtrl.apiGetAllMesas)
router.get('/mesas/:id', MesasCtrl.apiGetMesasById)
router.post('/mesas',verifyToken, isAdmin, MesasCtrl.apiAddMesa)
router.put('/mesas/:id', verifyToken, isAdmin, MesasCtrl.apiUpdateMesa)
router.delete('/mesas/:id', verifyToken, isAdmin, MesasCtrl.apiDeleteMesa)

module.exports = router