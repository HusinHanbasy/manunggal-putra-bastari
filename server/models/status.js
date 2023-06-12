'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Status extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Campaign, { foreignKey: "StatusId" })
    }
  }
  Status.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          message: "name is required"
        },
        notNull: {
          message: "name is required"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Status',
  });
  return Status;
};