// src/pages/HomePage.jsx
import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="text-center bg-white p-10 rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Chào Mừng Đến Với Hệ Thống Đăng Ký IA03
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Sử dụng React, Tailwind CSS và Node.js/MySQL.
        </p>
        <div className="space-x-4">
          <Link
            to="/signup"
            className="px-6 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 transition duration-150"
          >
            Đăng Ký
          </Link>
          <Link
            to="/login"
            className="px-6 py-3 text-lg font-semibold text-indigo-600 border-2 border-indigo-600 rounded-lg shadow-md hover:bg-indigo-50 transition duration-150"
          >
            Đăng Nhập
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
