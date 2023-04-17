'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class roles extends Model {
    static associate(models) {
      roles.hasMany(models.usuarios, {
        foreignKey: 'id'
      })
    }
  }
  roles.init({
    titulo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'roles',
  });
  return roles;
};