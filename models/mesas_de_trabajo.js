'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mesas_de_trabajo extends Model {
    static associate(models) {
      mesas_de_trabajo.hasMany(models.reservas, {
        foreignKey: 'id_mesa'
      })
    }
  }
  mesas_de_trabajo.init({
    nombre: DataTypes.STRING,
    tamaño: DataTypes.STRING,
    descripcion: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'mesas_de_trabajo',
  });
  return mesas_de_trabajo;
};