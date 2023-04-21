require('dotenv').config()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { Usuarios } = require('../models/index')

module.exports = class AutCtrl {

    static async login (req, res) {
        try {
            const { email, password } = req.body;
            const usuario = await Usuarios.findOne({
                where: { email: email }
            })
            if (!usuario) {
                return res.status(400).json({
                    success: false,
                    message: '¡Error! - Usuario equivocado'
                })
            }
            const isMatch = bcrypt.compareSync(password, usuario.password);
            if(!isMatch) {
                return res.status(400).json({
                    success: false,
                    message: '¡Error! - Algo ha ido mal'
                })
            }
            const token = jwt.sign(
                {
                    usuarioId: usuario.id,
                    rolId: usuario.id_rol
                },
                process.env.SECRET,
                { expiresIn: '2h' }
            );
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