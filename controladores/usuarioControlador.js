const { Usuarios } = require("../models/index");
const bcrypt = require('bcrypt')

module.exports = class UsuarioCtrl {

    // METODO PARA LLAMAR A TODOS LOS USUARIOS 
    static async apiGetAllUsuarios (req, res) {
        try {
            const respuesta = await Usuarios.findAll({
                order: [['id', 'DESC']],
                attributes: ['id', 'nombre', 'apellido', 'email', 'telefono', 'id_rol','createdAt', 'updatedAt']
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
            const usuarioId = req.usuarioId
        
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
            const {nombre, apellido, email, telefono, password} = req.body;
            const passwordEncriptado = bcrypt.hashSync(password, 10);
            const usuario = {
                nombre: nombre,
                apellido: apellido,
                email: email,
                telefono: telefono,
                password: passwordEncriptado,
                id_rol: 2
            }
            const respuesta = await Usuarios.create(usuario)
    
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
            const {nombre, apellido, email, telefono, password, id_rol} = req.body;
            const id = req.id
            const encryptedPassword = bcrypt.hashSync(password, 10);
            
            const respuesta = await Usuarios.update({
                nombre,
                apellido,
                email,
                telefono,
                password: encryptedPassword,
                id_rol
            }, { where: { id: id } })
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

    //METODO PARA MODIFICAR USUARIO COMO ADMIN
    static async editAdminUsuario (req, res) {
        try {
            const {nombre, apellido, telefono, id_rol, id} = req.body;
            const ID = req.params.id
            
            const respuesta = await Usuarios.update({   
                id,
                nombre,
                apellido,
                telefono,
                id_rol
            }, { where: { id: ID } })
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