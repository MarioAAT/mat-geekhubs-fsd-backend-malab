const router = require('express').Router()
const UsuarioCtrl = require('../controladores/usuarioControlador')

router.get('/usuarios', UsuarioCtrl.apiGetAllUsuarios)
router.get('/usuarios/:id', UsuarioCtrl.apiGetUsuarioById)
router.post('/usuarios', UsuarioCtrl.apiAddUsuario)
router.put('/usuarios/:id', UsuarioCtrl.apiUpdateUsuario)
router.delete('/usuarios/:id', UsuarioCtrl.apiDeleteUsuario)

module.exports = router 