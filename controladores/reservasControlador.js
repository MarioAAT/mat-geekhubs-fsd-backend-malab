const { Reservas, Usuarios, Mesas_de_trabajo } = require('../models/index')

module.exports = class ReservasCtrl {

    // METODO PARA LLAMAR A TODAS LAS RESERVAS 
    static async apiGetAllReservas (req, res) {
        try {
            const respuesta = await Reservas.findAll({
                order: [['id', 'DESC']],
                include: [
                    {
                        model: Usuarios,
                        attributes: {
                            exclude: ["password", "id", "id_rol", "email", "telefono", "createdAt", "updatedAt"]
                        },
                    },
                    {
                        model: Mesas_de_trabajo,
                        attributes: {
                            exclude: ["id", "tamaño", "descripcion", "createdAt", "updatedAt"]
                        },
                    },
                ],
                attributes: ['id', 'fecha_reserva', 'hora_inicio', 'hora_fin', 'id_usuario', 'id_mesa' ],
                
            })
            if (!respuesta) {
                return res.status(404).json({
                success: false,
                message: '¡Lo siento! - ¡No hay reservas registradas en este momento!'
                })
            }
            return res.status(201).json({
                success: true,
                message: '¡Éxito! - ¡La información de las reservas se recuperó con éxito!',
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
            const reservaId = req.params.reservaId
        
            const respuesta = await Reservas.findByPk(reservaId, {
                attributes: ['id', 'fecha_reserva', 'hora_inicio', 'hora_fin', 'id_usuario', 'id_mesa']
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
                error: error.message
            })
        }
    }

    // METODO PARA CREAR UNA NUEVA RESERVA
    static async apiAddReserva (req, res) {
        try {    
            const nuevaReserva = {
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

    // METODO PARA MODIFICAR RESERVAS
    static async apiUpdateReserva (req, res) {
        try {
            const respuesta = await Reservas.update({
                fecha_reserva: req.body.fecha_reserva,
                hora_inicio: req.body.hora_inicio,
                hora_fin: req.body.hora_fin,
                id_usuario: req.body.id_usuario,
                id_mesa: req.body.id_mesa
            }, { where: { id: req.params.id } })
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

    // METODO PARA MODIFICAR RESERVAS COMO USUARIO
    static async apiUpdateReservaUsuario (req, res) {
        try {
            const respuesta = await Reservas.update({
                fecha_reserva: req.body.fecha_reserva,
                hora_inicio: req.body.hora_inicio,
                hora_fin: req.body.hora_fin,
                id_usuario: req.body.id_usuario,
                id_mesa: req.body.id_mesa
            }, { where: { id: req.params.id } })
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

    static async getReservaUsuario (req,res) {
        try {
            const usuarioReserva = await Reservas.findAll(
                {
                    where: { 
                        id_usuario: req.usuarioId 
                    },
                    include: [
                        {
                            model: Usuarios,
                            attributes: {
                                exclude: ["password", "id", "id_rol", "email", "telefono", "createdAt", "updatedAt"]
                            },
                        },
                        {
                            model: Mesas_de_trabajo,
                            attributes: {
                                exclude: ["id", "tamaño", "descripcion", "createdAt", "updatedAt"]
                            },
                        },
                    ],
                    attributes: {
                        exclude: ["id", "id_usuario", "id_mesa", "createdAt", "updatedAt"]
                    }
                }
            )
            return res.json(usuarioReserva)
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Ups, something were wrong",
                error: error.message
            })
        }
    }
}