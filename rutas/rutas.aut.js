const router = require('express').Router()
const AutCtrl = require('../controladores/autControlador')

router.post('/login', AutCtrl.login)

module.exports = router 