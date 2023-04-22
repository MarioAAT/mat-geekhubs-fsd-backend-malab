const router = require('express').Router()
const UsuarioCtrl = require('../controladores/usuarioControlador')
const verifyToken = require('../middlewares/verifyToken')
const esAdmin = require('../middlewares/privAdmin')

router.get('/usuarios', verifyToken, esAdmin, UsuarioCtrl.apiGetAllUsuarios)
router.get('/usuarios/:id', verifyToken, UsuarioCtrl.apiGetUsuarioById)
router.post('/usuarios', UsuarioCtrl.apiAddUsuario)
router.put('/usuarios/:id', verifyToken, esAdmin, UsuarioCtrl.apiUpdateUsuario)
router.delete('/usuarios/:id',verifyToken, esAdmin, UsuarioCtrl.apiDeleteUsuario)

module.exports = router 