'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Campaign, { foreignKey: "CampaignId" })
      this.belongsTo(models.User, { foreignKey: "UserId" })
    }
  }
  History.init({
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          message: "User Id is required"
        },
        notNull: {
          message: "User Id is required"
        }
      }
    },
    CampaignId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          message: "Campaign Id is required"
        },
        notNull: {
          message: "Campaign Id is required"
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          message: "description is required"
        },
        notNull: {
          message: "description is required"
        }
      }
    },
  }, {
    sequelize,
    modelName: 'History',
  });
  return History;
};