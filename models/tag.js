'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tag extends Model {
    static associate(models) {
      models.tag.belongsToMany(models.treasure, {through: "treasureTags"})
    }
  };
  tag.init({
    hook: DataTypes.STRING,
    treasureId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tag',
  });
  return tag;
};