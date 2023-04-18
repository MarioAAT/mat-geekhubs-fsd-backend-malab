'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mesas_de_trabajo extends Model {
    static associate(models) {
      Mesas_de_trabajo.hasMany(models.Reservas, {
        foreignKey: 'id_mesa'
      })
    }
  }
  Mesas_de_trabajo.init({
    nombre: DataTypes.STRING,
    tamaño: DataTypes.STRING,
    descripcion: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Mesas_de_trabajo',
  });
  return Mesas_de_trabajo;
};