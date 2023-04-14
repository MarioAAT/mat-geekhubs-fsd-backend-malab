'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cursos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  cursos.init({
    nombre_curso: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    id_usuario: DataTypes.INTEGER,
    id_profesional: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'cursos',
  });
  return cursos;
};