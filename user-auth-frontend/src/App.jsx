// src/App.jsx

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import các Component trang đã tạo
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route: / (Trang Chủ) */}
        <Route path="/" element={<HomePage />} />

        {/* Route: /login (Trang Đăng Nhập) */}
        <Route path="/login" element={<LoginPage />} />

        {/* Route: /signup (Trang Đăng Ký) */}
        <Route path="/signup" element={<SignUpPage />} />

        {/* Tùy chọn: Thêm Route 404 nếu cần */}
        <Route
          path="*"
          element={
            <h1 className="text-center mt-20">404 - Không tìm thấy trang</h1>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
