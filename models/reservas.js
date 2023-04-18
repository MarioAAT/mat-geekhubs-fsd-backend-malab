'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reservas extends Model {
    static associate(models) {
      Reservas.belongsTo(models.Usuarios, {
        foreignKey: 'id_usuario'
      });
      Reservas.belongsTo(models.Mesas_de_trabajo, {
        foreignKey: 'id_mesa'
      })
    }
  }
  Reservas.init({
    fecha_reserva: DataTypes.DATE,
    hora_inicio: DataTypes.TIME,
    hora_fin: DataTypes.TIME,
    id_usuario: DataTypes.INTEGER,
    id_mesa: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Reservas',
  });
  return Reservas;
};