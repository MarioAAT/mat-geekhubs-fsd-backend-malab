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
                exito: false,
                mensaje: '¡Lo siento! - ¡No hay usuarios registrados en este momento!'
                })
            }
            return res.status(201).json({
                exito: true,
                mensaje: '¡Éxito! - ¡La información de los usuarios se recuperó con éxito!',
                lista_usuarios: response
            })
        } catch (error) {
            return res.status(500).json({
                exito: false,
                mensaje: '¡Error! - Algo ha ido mal',
                error: error.message
            })
        }
    }

    // METODO PARA BUSCAR UN USUARIO MEDIANTE ID
    static async apiGetUsuarioById (req, res) {
        try {
            const usuarioId = req.usuarioId
        
            const respuesta = await Usuarios.findByPk(usuarioId, {
                attributes: ['id', 'nombre', 'apellido', 'email', 'telefono', 'id_rol','createdAt', 'updatedAt']
            })
            if (!respuesta) {
                return res.status(404).json({
                exito: false,
                mensaje: '¡Lo siento! - El usuario no existe en la base de datos.'
                })
            }
            return res.status(201).json({
                exito: true,
                mensaje: '¡Éxito! - Usuario recuperado con éxito.',
                usuario: respuesta
            })
        } catch (error) {
            return res.status(500).json({
                exito: false,
                mensaje: '¡Error! - Algo ha ido mal',
                error: error.mensaje
            })
        }
    }

    // METODO PARA CREAR UN NUEVO USUARIO
    static async apiAddUsuario (req, res) {
        try {    
            const nuevoUsuario = {
                id: req.body.id,
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                telefono: req.body.telefono,
                password: req.body.password,
                id_rol: req.body.id_rol,
            }
            const respuesta = await Usuarios.create(nuevoUsuario)
    
            return res.status(201).json({
                sucess: true,
                mensaje: '¡Éxito! - ¡Usuario añadido con éxito!',
                user: respuesta.id,
            })
        } catch (error) {
            return res.status(500).json({
            sucess: false,
            mensaje: '¡Error! - Algo ha ido mal.',
            error: error.mensaje
            })
        }
    }

    // METODO PARA MODIFICAR USUARIOS
    static async apiUpdateUsuario (req, res) {
        try {
            const respuesta = await Usuarios.update({
                id: req.body.id,
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                telefono: req.body.telefono,
                password: req.body.password,
                id_rol: req.body.id_rol,
            }, { where: { id: req.body.id } })
            return res.status(201).json({
                exito  : true,
                mensaje: '¡Éxito! - Usuario actualizado con éxito.',
                usuario: respuesta.id
            })
        } catch (error) {
            return res.status(500).json({
                exito: false,
                mensaje: '¡Error! - Algo ha ido mal.',
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
                exito: false,
                mensaje: '¡Lo siento! - El usuario no existe en la base de datos.'
                })
            }
            return res.status(201).json({
                exito: true,
                mensaje: '¡Éxito! - El usuario ha sido eliminado con éxito.'
            })
        } catch (error) {
            return res.status(500).json({
                exito: false,
                mensaje: '¡Error! - Algo ha ido mal',
                error: error.mensaje
            })
        }
    }
}