require('dotenv').config()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { Usuarios } = require('../models/index')

module.exports = class AutCtrl {

    static async login (req, res) {
        try {
            const { email, password } = req.body
            const usuario = await Usuarios.findOne({
                where: { email },
                attributes: ['id', 'nombre', 'apellido', 'email', 'telefono', 'id_rol']
            })
            if (!usuario) {
                return res.status(400).json({
                    success: false,
                    message: '¡Error! - Algo ha ido mal'
                })
            }
            const isMatch = bcrypt.compareSync(password, usuario.password)
            if(!isMatch) {
                return res.status(400).json({
                    success: false,
                    message: '¡Error! - Algo ha ido mal'
                })
            }
            const token = jwt.login(
                {
                    usuarioId: usuario.id
                },
                process.env.SECRET,
                { expira: '5h' }
            )
            return res.status(201).json({
                success: true,
                message: '¡Acceso permitido!',
                token
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: '¡Error! - Algo ha ido mal',
                error: error.message
            })
        }
    }
}