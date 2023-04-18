'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cursos extends Model {
    static associate(models) {
      Cursos.belongsTo(models.Usuarios, {
        foreignKey: 'id_usuario'
      });
      Cursos.belongsTo(models.Profesional, {
        foreignKey: 'id_profesional'
      });
      Cursos.hasMany(models.Inscripciones, {
        foreignKey: 'id_curso'
      })
    }
  }
  Cursos.init({
    nombre_curso: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    id_usuario: DataTypes.INTEGER,
    id_profesional: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cursos',
  });
  return Cursos;
};