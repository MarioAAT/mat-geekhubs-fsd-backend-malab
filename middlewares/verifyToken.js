require('dotenv').config()
const jwt = require('jsonwebtoken')
const { Usuarios } = require('../models')

const verifyToken = async (req, res, next) => {
    try {
        const autorizacion = req.headers.autorizacion
        if(!autorizacion) {
            return res.status(401).json({
                success: false,
                message: '¡No autorizado! - Ficha faltante.'
            })
        }
        const [strategy, token] = autorizacion.split(' ')
        const tokenData = jwt.verify(token, process.env.SECRET)
        const usuario = await Usuarios.findByPk(token.Data.userId)
        if(!usuario) {
            return res.status(401).json({
                seccess: false,
                message: '¡No autorizado! - Ficha faltante.'
            })
        }
        req.usuarioId = tokenData.usuarioId
        req.rolId = tokenData.rolId 

        next()
    } catch (error) {
    switch (error.name) {
        case 'TokenExpiredError':
        return res.status(401).json({
            sucess: false,
            message: '¡No autorizado! - El token está caducado',
            expiredAt: error.expiredAt
        })
        case 'NotBeforeError':
        return res.status(401).json({
            sucess: false,
            message: '¡No autorizado! - El token está caducado',
            date: error.date
        })
        default:
        return res.status(401).json({
            sucess: false,
            message: '¡No autorizado! - El token está caducado',
            error: error.message
        })
    }
    }
}

module.exports = verifyToken