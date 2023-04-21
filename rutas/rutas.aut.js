const router = require('express').Router()
const AutCtrl = require('../controladores/autControlador')
// const verifyToken = require('../middlewares/verifyToken')

router.post('/login', AutCtrl.login)

module.exports = router 