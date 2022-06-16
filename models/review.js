"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      review.belongsTo(models.activity, { foreignKey: "activityId" });
    }
  }
  review.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      text: { type: DataTypes.TEXT, allowNull: false },
      date: { type: DataTypes.DATEONLY, allowNull: false },
      activityId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "review",
    }
  );
  return review;
};
