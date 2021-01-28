'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class treasure extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.treasure.belongsTo(models.user),
      models.treasure.belongsToMany(models.tag, {through: "treasureTags"})
    }
  };
  treasure.init({
    imageId: DataTypes.INTEGER,
    image: DataTypes.STRING,
    memoryHook: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'treasure',
  });
  return treasure;
};