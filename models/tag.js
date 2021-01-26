'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.tag.hasMany(models.trasure, {
        through: "treasure_tags"
      })
    }
  };
  tag.init({
    memory_hook: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    treasure_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tag',
  });
  return tag;
};