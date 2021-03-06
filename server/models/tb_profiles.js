"use strict";
const { Model } = require("sequelize");
const tb_users = require("./tb_users");
module.exports = (sequelize, DataTypes) => {
  class tb_profiles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tb_profiles.belongsTo(models.tb_users, {
        as: "user",
        foreignKey: {
          name: "user_id",
        },
      });
    }
  }
  tb_profiles.init(
    {
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "tb_profiles",
    }
  );
  return tb_profiles;
};
