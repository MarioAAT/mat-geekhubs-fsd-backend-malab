'use strict';
const {
  Model
} = require('sequelize');
const inscripciones = require('./inscripciones');
module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    static associate(models) {
      Usuarios.belongsTo(
        models.Role, {
          foreignKey: 'id_rol'
        });
      Usuarios.hasMany(models.Reservas, {
        foreignKey: 'id_usuario'
      });
      Usuarios.belongsToMany(models.Cursos, {
        through: 'inscripciones',
        foreignKey: 'id_usuario'
      })
    }
  }
  Usuarios.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    email: DataTypes.STRING,
    telefono: DataTypes.STRING,
    password: DataTypes.STRING,
    id_rol: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Usuarios',
  });
  return Usuarios;
};