// src/pages/LoginPage.jsx
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 💡 MÔ PHỎNG LOGIC ĐĂNG NHẬP (theo yêu cầu bài tập)
  const onSubmit = (data) => {
    setIsSubmitting(true);
    // Giả lập gọi API thành công sau 1.5 giây
    setTimeout(() => {
      setIsSubmitting(false);
      setIsLoggedIn(true);
      console.log("Login data:", data);

      setTimeout(() => {
        alert("Đăng nhập thành công! (Mô phỏng chuyển hướng)");
        // Ở đây sẽ thực hiện điều hướng (ví dụ: navigate('/'))
        setIsLoggedIn(false);
      }, 1000);
    }, 1500);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-8 space-y-6 bg-white rounded-xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Đăng Nhập
        </h2>

        {/* Phản hồi mô phỏng thành công */}
        {isLoggedIn && (
          <div className="p-3 text-sm font-medium text-green-700 bg-green-100 border border-green-300 rounded-lg">
            Đăng nhập thành công! Đang xử lý...
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="nhap@email.com"
              className={`w-full p-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-green-500 focus:border-green-500`}
              {...register("email", {
                required: "Email là bắt buộc.",
                pattern: { value: /^\S+@\S+$/i, message: "Email không hợp lệ" },
              })}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Mật khẩu Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mật khẩu
            </label>
            <input
              type="password"
              placeholder="Mật khẩu"
              className={`w-full p-2 border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-green-500 focus:border-green-500`}
              {...register("password", { required: "Mật khẩu là bắt buộc." })}
            />
            {errors.password && (
              <p className="mt-1 text-xs text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 disabled:bg-green-400"
          >
            {isSubmitting ? "Đang Đăng Nhập..." : "Đăng Nhập"}
          </button>
        </form>

        <p className="text-sm text-center text-gray-600">
          Chưa có tài khoản?{" "}
          <Link to="/signup" className="text-indigo-600 hover:underline">
            Đăng ký
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
