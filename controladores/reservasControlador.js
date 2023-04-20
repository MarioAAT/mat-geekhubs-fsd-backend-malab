const { Reservas } = require('../models/index')

module.exports = class ReservasCtrl {

    // METODO PARA LLAMAR A TODAS LAS RESERVAS 
    static async apiGetAllReservas (req, res) {
        try {
            const respuesta = await Reservas.findAll({
                order: [['id', 'DESC']],
                attributes: ['id', 'fecha_reserva', 'hora_inicio', 'id_usuario', 'id_mesa' ],
                // where: { role_id: { [Op.ne]: 4 } }
            })
            if (!respuesta) {
                return res.status(404).json({
                success: false,
                message: '¡Lo siento! - ¡No hay reservas registradas en este momento!'
                })
            }
            return res.status(201).json({
                success: true,
                message: '¡Éxito! - ¡La información de la reserva se recuperó con éxito!',
                lista_reservas: respuesta
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: '¡Error! - Algo ha ido mal',
                error: error.message
            })
        }
    }

    // METODO PARA BUSCAR RESERVA MEDIANTE ID
    static async apiGetReservaById (req, res) {
        try {
            const reservaId = req.reservaId
        
            const respuesta = await Reservas.findByPk(reservaId, {
                attributes: ['id', 'fecha_reserva', 'hora_inicio', 'id_usuario', 'id_mesa']
            })
            if (!respuesta) {
                return res.status(404).json({
                success: false,
                message: '¡Lo siento! - La reserva no existe en la base de datos.'
                })
            }
            return res.status(201).json({
                success: true,
                message: '¡Éxito! - Reserva recuperada con éxito.',
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

    // METODO PARA CREAR UNA NUEVA RESERVA
    static async apiAddReserva (req, res) {
        try {    
            const nuevaReserva = {
                id: req.body.id,
                fecha_reserva: req.body.fecha_reserva,
                hora_inicio: req.body.hora_inicio,
                hora_fin: req.body.hora_fin,
                id_usuario: req.body.id_usuario,
                id_mesa: req.body.id_mesa
            }
            const respuesta = await Reservas.create(nuevaReserva)
    
            return res.status(201).json({
                success: true,
                message: '¡Éxito! - ¡Reserva añadida con éxito!',
                reserva: respuesta.id,
            })
        } catch (error) {
            return res.status(500).json({
            success: false,
            message: '¡Error! - Algo ha ido mal.',
            error: error.mensaje
            })
        }
    }

    // METODO PARA MODIFICAR RESERVAS
    static async apiUpdateReserva (req, res) {
        try {
            const respuesta = await Reservas.update({
                id: req.body.id,
                fecha_reserva: req.body.fecha_reserva,
                hora_inicio: req.body.hora_inicio,
                hora_fin: req.body.hora_fin,
                id_usuario: req.body.id_usuario,
                id_mesa: req.body.id_mesa
            }, { where: { id: req.body.id } })
            return res.status(201).json({
                success  : true,
                message: '¡Éxito! - Reserva actualizada con éxito.',
                reserva: respuesta.id
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: '¡Error! - Algo ha ido mal.',
                error: error.mensaje
            })
        }
    }

    //  METODO PARA ELIMINAR RESERVA
    static async apiDeleteReserva (req, res) {
        try {
            const respuesta = await Reservas.destroy({ where: { id: req.params.id } })
            if (!respuesta) {
                return res.status(404).json({
                success: false,
                message: '¡Lo siento! - La reserva no existe en la base de datos.'
                })
            }
            return res.status(201).json({
                success: true,
                message: '¡Éxito! - La reserva ha sido eliminada con éxito.'
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