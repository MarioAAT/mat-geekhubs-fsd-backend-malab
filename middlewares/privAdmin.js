const jwt = require('jsonwebtoken');

const esAdmin = (req, res, next) => {
    try {
        if (req.rolId !== 1){
            return res.status(401).json({
                succes: false,
                message: '¡No autorizado! - No eres administrador' 
            })
        }
        next();
    } catch (error) {
        return res.status(401).json({
            succes: false,
            message: '¡No Autorizado! - Algo ha salido mal.',
            error: error.message
        })
    }
}

module.exports = esAdmin;