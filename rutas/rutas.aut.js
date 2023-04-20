const router = require('express').Router()
const AutCtrl = require('../controladores/autControlador')
// const verifyToken = require()

router.post('/login', AutCtrl.login)

module.exports = router 