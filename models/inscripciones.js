'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inscripciones extends Model {
    static associate(models) {
      Inscripciones.belongsTo(models.Usuarios, {
        foreignKey: 'id_usuario'
      });
      Inscripciones.belongsTo(models.Cursos, {
        foreignKey: 'id_curso'
      })
    }
  }
  Inscripciones.init({
    fecha_inscripcion: DataTypes.DATE,
    id_curso: DataTypes.INTEGER,
    id_usuario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Inscripciones',
  });
  return Inscripciones;
};