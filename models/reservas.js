'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reservas extends Model {
    static associate(models) {
      reservas.belongsTo(models.usuarios, {
        foreignKey: 'id_usuario'
      });
      reservas.belongsTo(models.mesas_de_trabajo, {
        foreignKey: 'id_mesa'
      })
    }
  }
  reservas.init({
    fecha_reserva: DataTypes.DATE,
    hora_inicio: DataTypes.TIME,
    hora_fin: DataTypes.TIME,
    id_usuario: DataTypes.INTEGER,
    id_mesa: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'reservas',
  });
  return reservas;
};