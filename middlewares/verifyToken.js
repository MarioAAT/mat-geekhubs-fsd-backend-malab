require('dotenv').config()
const jwt = require('jsonwebtoken')

const verifyToken = async (req, res, next) => {
    try {
        const authorization = req.headers.authorization;
        if(!authorization) {
            return res.status(401).json({
                success: false,
                message: '¡No autorizado! - Token perdido.'
            })
        }
        const [strategy, token] = authorization.split(' ')
        const tokenDeco = jwt.verify(token, process.env.SECRET);
        req.usuarioId = tokenDeco.usuarioId;
        req.rolId = tokenDeco.rolId;
        req.email = tokenDeco.email
        next()
    } catch (error) {
    switch (error.name) {
        case 'TokenCaducado':
        return res.status(401).json({
            sucess: false,
            message: '¡No autorizado! - El token está caducado',
            expiredAt: error.expiredAt
        })
        case 'Error':
        return res.status(401).json({
            sucess: false,
            message: '¡No autorizado! - El token está inactivo',
            date: error.date
        })
        default:
        return res.status(401).json({
            sucess: false,
            message: '¡No autorizado! - Error de Token',
            error: error.message
        })
    }
    }
}

module.exports = verifyToken