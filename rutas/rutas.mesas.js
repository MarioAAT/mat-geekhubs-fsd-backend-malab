const router = require('express').Router()
const MesasCtrl = require('../controladores/mesasControlador')
const UsuarioCtrl = require('../controladores/usuarioControlador')

router.get('/mesas', MesasCtrl.apiGetAllMesas)
router.get('/mesas/:id', MesasCtrl.apiGetMesasById)
router.post('/mesas', UsuarioCtrl.apiAddUsuario)
router.put('/mesas', UsuarioCtrl.apiUpdateUsuario)
router.delete('/mesas', UsuarioCtrl.apiDeleteUsuario)

module.exports = router