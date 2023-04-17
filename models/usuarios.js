'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuarios extends Model {
    static associate(models) {
      usuarios.belongsTo(
        models.roles, {
          foreignKey: 'id_rol'
        }
      )
    }
  }
  usuarios.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    email: DataTypes.STRING,
    telefono: DataTypes.STRING,
    password: DataTypes.STRING,
    id_rol: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'usuarios',
  });
  return usuarios;
};