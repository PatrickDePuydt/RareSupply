'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class treasure extends Model {
    static associate(models) {
      models.treasure.belongsTo(models.user),
      models.treasure.belongsToMany(models.tag, {through: "treasureTags"})
    }
  };
  treasure.init({
    imageId: DataTypes.INTEGER,
    image: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'treasure',
  });
  return treasure;
};