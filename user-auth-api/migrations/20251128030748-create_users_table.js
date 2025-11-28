"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // Hàm 'up' chạy khi bạn thực hiện 'npx sequelize-cli db:migrate'
  async up(queryInterface, Sequelize) {
    // 1. Tạo bảng 'users'
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER, // Khớp với DataTypes.INTEGER
      },
      email: {
        type: Sequelize.STRING, // Khớp với DataTypes.STRING
        allowNull: false,
        unique: true, // Yêu cầu duy nhất
      },
      password: {
        type: Sequelize.STRING, // Khớp với DataTypes.STRING
        allowNull: false,
      },
      // 2. Thêm các trường timestamps mà Sequelize yêu cầu
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  // Hàm 'down' chạy khi bạn thực hiện 'npx sequelize-cli db:migrate:undo'
  async down(queryInterface, Sequelize) {
    // 3. Xóa bảng 'users' (Rollback)
    await queryInterface.dropTable("users");
  },
};
