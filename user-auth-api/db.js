// user-auth-api/db.js
const { Sequelize } = require("sequelize");
require("dotenv").config(); // Đọc biến môi trường

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false,
  }
);

module.exports = sequelize;
