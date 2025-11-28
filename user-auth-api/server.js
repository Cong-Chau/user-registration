// user-auth-api/server.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const sequelize = require("./db");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 3000;
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: FRONTEND_URL,
    methods: "POST",
    credentials: true,
  })
);

// Routes
app.use("/user", userRoutes);

// Đồng bộ CSDL và khởi động server
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected.");
    // Lưu ý: Không dùng sequelize.sync() ở đây nếu đã dùng Migrations.
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
  });
