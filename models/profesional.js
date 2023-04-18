'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profesional extends Model {
    static associate(models) {
      Profesional.hasMany(models.Cursos, {
        foreignKey: 'id_profesional'
      })
    }
  }
  Profesional.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    email: DataTypes.STRING,
    especialidad: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Profesional',
  });
  return Profesional;
};