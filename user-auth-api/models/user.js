// user-auth-api/models/user.js
const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // Yêu cầu duy nhất
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Sequelize tự động thêm createdAt và updatedAt
  },
  {
    tableName: "users",
    timestamps: true,
  }
);

module.exports = User;
