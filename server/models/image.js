'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Campaign, { foreignKey: "CampaignId" })
    }
  }
  Image.init({
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
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          message: "image is required"
        },
        notNull: {
          message: "image is required"
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
    modelName: 'Image',
  });
  return Image;
};