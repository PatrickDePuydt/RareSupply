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
      // define association here
      models.treasure.blongsTo(models.user)
      models.treasure.hasMany(models.tag, {
        through: "treasure_tags"
      })
    }
  };
  treasure.init({
    image_url: DataTypes.STRING,
    user_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'treasure',
  });
  return treasure;
};