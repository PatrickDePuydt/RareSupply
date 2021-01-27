'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class treasureTag extends Model {
    static associate(models) {
      // define association here
    }
  };
  treasureTag.init({
    treasureId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'treasureTag',
  });
  return treasureTag;
};