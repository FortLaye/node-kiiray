'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Entreprise extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Entreprise.init({
    nom: DataTypes.STRING,
    adresse: DataTypes.STRING,
    ninea: DataTypes.STRING,
    registrecom: DataTypes.STRING,
    phone: DataTypes.STRING,
    region: DataTypes.STRING,
    ville: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Entreprise',
  });
  return Entreprise;
};