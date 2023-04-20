const { Mesas_de_trabajo } = require('../models/index')

module.exports = class MesasCtrl {

    // METODO PARA LLAMAR A TODOS LAS MESAS 
    static async apiGetAllMesas (req, res) {
        try {
            const respuesta = await Mesas_de_trabajo.findAll ({
                attributes: ['id', 'nombre', 'tamaño', 'descripcion']
            })
            if (!respuesta) {
                return res.status(404).json({
                    success: false,
                    message: '¡Error! - Algo ha ido mal' 
                })
            } else {
                return res.json(respuesta)
            }
        } catch (error) {
            return res.status(500).json({ error })
        }
    }

    // METODO PARA BUSCAR MESAS MEDIANTE ID
    static async apiGetMesasById (req, res) {
        try {
            const mesasId = req.usuarioId
        
            const respuesta = await Mesas_de_trabajo.findByPk(mesasId, {
                attributes: ['id', 'nombre', 'tamaño', 'descripcion']
            })
            if (!respuesta) {
                return res.status(404).json({
                success: false,
                message: '¡Lo siento! - La mesa no existe en la base de datos.'
                })
            }
            return res.status(201).json({
                success: true,
                message: '¡Éxito! - Mesa recuperada con éxito.',
                usuario: respuesta
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: '¡Error! - Algo ha ido mal',
                error: error.mensaje
            })
        }
    }

    // METODO PARA CREAR UNA NUEVA MESA
    static async apiAddMesa (req, res) {
        try {    
            const nuevaMesa = {
                id: req.body.id,
                nombre: req.body.nombre,
                tamaño: req.body.tamaño,
                descripcion: req.body.descripcion
            }
            const respuesta = await Mesas_de_trabajo.create(nuevaMesa)
    
            return res.status(201).json({
                success: true,
                message: '¡Éxito! - ¡Mesa añadida con éxito!',
                mesas: respuesta.id,
            })
        } catch (error) {
            return res.status(500).json({
            success: false,
            message: '¡Error! - Algo ha ido mal.',
            error: error.mensaje
            })
        }
    }

    // METODO PARA MODIFICAR MESAS
    static async apiUpdateMesa (req, res) {
        try {
            const respuesta = await Mesas_de_trabajo.update({
                id: req.body.id,
                nombre: req.body.nombre,
                tamaño: req.body.tamaño,
                descripcion: req.body.descripcion
            }, { where: { id: req.body.id } })
            return res.status(201).json({
                success  : true,
                message: '¡Éxito! - Mesa actualizada con éxito.',
                mesa: respuesta.id
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: '¡Error! - Algo ha ido mal.',
                error: error.mensaje
            })
        }
    }

    //  METODO PARA ELIMINAR UN MESA
    static async apiDeleteMesa (req, res) {
        try {
            const respuesta = await Mesas_de_trabajo.destroy({ where: { id: req.params.id } })
            if (!respuesta) {
                return res.status(404).json({
                success: false,
                message: '¡Lo siento! - La mesa no existe en la base de datos.'
                })
            }
            return res.status(201).json({
                success: true,
                message: '¡Éxito! - La mesa ha sido eliminado con éxito.'
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