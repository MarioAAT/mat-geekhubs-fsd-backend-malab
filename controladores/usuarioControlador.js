const { Usuarios } = require("../models/index");

module.exports = class UsuarioCtrl {

    // METODO PARA LLAMAR A TODOS LOS USUARIOS 
    static async apiGetAllUsuarios (req, res) {
        try {
            const respuesta = await Usuarios.findAll({
                order: [['id', 'DESC']],
                attributes: ['id', 'nombre', 'apellido', 'email', 'telefono', 'id_rol','createdAt', 'updatedAt'],
                // where: { role_id: { [Op.ne]: 4 } }
            })
            if (!respuesta) {
                return res.status(404).json({
                success: false,
                message: '¡Lo siento! - ¡No hay usuarios registrados en este momento!'
                })
            }
            return res.status(201).json({
                success: true,
                message: '¡Éxito! - ¡La información de los usuarios se recuperó con éxito!',
                lista_usuarios: respuesta
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: '¡Error! - Algo ha ido mal',
                error: error.message
            })
        }
    }

    // METODO PARA BUSCAR UN USUARIO MEDIANTE ID
    static async apiGetUsuarioById (req, res) {
        try {
            const usuarioId = req.params.id
        
            const respuesta = await Usuarios.findByPk(usuarioId, {
                attributes: ['id', 'nombre', 'apellido', 'email', 'telefono', 'id_rol','createdAt', 'updatedAt']
            })
            if (!respuesta) {
                return res.status(404).json({
                success: false,
                message: '¡Lo siento! - El usuario no existe en la base de datos.'
                })
            }
            return res.status(201).json({
                success: true,
                message: '¡Éxito! - Usuario recuperado con éxito.',
                usuario: respuesta
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: '¡Error! - Algo ha ido mal',
                error: error.message
            })
        }
    }

    // METODO PARA CREAR UN NUEVO USUARIO
    static async apiAddUsuario (req, res) {
        try {    
            const nuevoUsuario = {
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                telefono: req.body.telefono,
                password: req.body.password,
                id_rol: req.body.id_rol,
            }
            const respuesta = await Usuarios.create(nuevoUsuario)
    
            return res.status(201).json({
                success: true,
                message: '¡Éxito! - ¡Usuario añadido con éxito!',
                user: respuesta.id
            })
        } catch (error) {
            return res.status(500).json({
            success: false,
            message: '¡Error! - Algo ha ido mal.',
            error: error.message
            })
        }
    }

    // METODO PARA MODIFICAR USUARIOS
    static async apiUpdateUsuario (req, res) {
        try {
            const respuesta = await Usuarios.update({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                telefono: req.body.telefono,
                password: req.body.password,
                id_rol: req.body.id_rol,
            }, { where: { id: req.params.id } })
            return res.status(201).json({
                success: true,
                message: '¡Éxito! - Usuario actualizado con éxito.',
                user: respuesta.id
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: '¡Error! - Algo ha ido mal.',
                error: error.mensaje
            })
        }
    }

    //  METODO PARA ELIMINAR UN USUARIO
    static async apiDeleteUsuario (req, res) {
        try {
            const respuesta = await Usuarios.destroy({ where: { id: req.params.id } })
            if (!respuesta) {
                return res.status(404).json({
                success: false,
                message: '¡Lo siento! - El usuario no existe en la base de datos.'
                })
            }
            return res.status(201).json({
                success: true,
                message: '¡Éxito! - El usuario ha sido eliminado con éxito.'
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: '¡Error! - Algo ha ido mal',
                error: error.mensaje
            })
        }
    }
}