const router = require('express').Router()
const UsuarioCtrl = require('../controladores/usuarioControlador')
const verifyToken = require('../middlewares/verifyToken')
const esAdmin = require('../middlewares/privAdmin')

router.get('/allusuarios', verifyToken, esAdmin, UsuarioCtrl.apiGetAllUsuarios)
router.get('/usuario/perfil', verifyToken, UsuarioCtrl.apiGetUsuarioById)
router.post('/nuevousuario', UsuarioCtrl.apiAddUsuario)
router.put('/usuarios/edit', verifyToken, UsuarioCtrl.apiUpdateUsuario)
router.put('/usuario/edit/admin/:id', verifyToken, UsuarioCtrl.editAdminUsuario)
router.delete('/usuarios/:id',verifyToken, esAdmin, UsuarioCtrl.apiDeleteUsuario)

module.exports = router 