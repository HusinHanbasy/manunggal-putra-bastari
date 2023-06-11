'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Donation extends Model {
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
  Donation.init({
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
    value: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          message: "value is required"
        },
        notNull: {
          message: "value is required"
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Donation',
  });
  return Donation;
};