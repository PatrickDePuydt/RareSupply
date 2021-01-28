'use strict';
const bcrypt = require('bcrypt');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
 
    static associate(models) {
      models.user.hasMany(models.treasure)
    }

    validPassword(typedPassword) {
      let isValid = bcrypt.compareSync(typedPassword, this.password);
      return isValid;
    }

    toJSON() {
      let userData = this.get();
      delete userData.password;
      return userData;
    }
  };
  user.init({
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: 'Invalid email address'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [8, 99],
          msg: 'Password msut be between 8 and 99 characters'
        },
        notContains: {
          arts: this.name,
          msg: 'Password cannot contain your name'
        }
      }
    }
  },{
    hooks: {
      beforeCreate: (pendingUser) => {
        if (pendingUser && pendingUser.password) {
          let hash = bcrypt.hashSync(pendingUser.password, 12);
          pendingUser.password = hash
        }
      }
    },
    sequelize,
    modelName: 'user',
  });
  return user;
};