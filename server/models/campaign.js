'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Campaign extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Category, { foreignKey: "CategoryId" })
      this.hasMany(models.Donation, { foreignKey: "CampaignId" })
      this.hasMany(models.History, { foreignKey: "CampaignId" })
    }
  }
  Campaign.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          message: "title is required"
        },
        notNull: {
          message: "title is required"
        }
      }
    },
    money: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          message: "money is required"
        },
        notNull: {
          message: "money is required"
        }
      }
    },
    target: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          message: "target is required"
        },
        notNull: {
          message: "target is required"
        }
      }
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          message: "duration is required"
        },
        notNull: {
          message: "duration is required"
        }
      }
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          message: "imageUrl is required"
        },
        notNull: {
          message: "imageUrl is required"
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
    CategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          message: "Category Id is required"
        },
        notNull: {
          message: "Category Id is required"
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Campaign',
  });
  return Campaign;
};