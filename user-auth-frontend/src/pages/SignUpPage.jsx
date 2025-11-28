// src/pages/SignUpPage.jsx

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { Link } from "react-router-dom";
// 💡 Import service đã tạo
import { registerUser } from "../../api/authService";

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [successMessage, setSuccessMessage] = useState(null);

  // Sử dụng hàm registerUser đã tạo làm mutationFn
  const mutation = useMutation({
    mutationFn: registerUser,

    onSuccess: (data) => {
      // Dữ liệu nhận được từ response.data (như đã cấu hình trong service)
      setSuccessMessage(`Đăng ký thành công cho: ${data.user.email}!`);
    },

    onError: (error) => {
      // Lỗi là đối tượng error từ promise.reject (đã xử lý trong interceptor)
      const msg =
        error.response?.data?.message || "Lỗi đăng ký. Vui lòng thử lại.";
      setSuccessMessage(null);
      alert(`Đăng ký thất bại: ${msg}`);
    },
  });

  const onSubmit = (data) => {
    // Gọi mutation với dữ liệu form
    mutation.mutate(data);
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-8 space-y-6 bg-white rounded-xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Đăng Ký
        </h2>

        {/* Phản hồi thành công */}
        {successMessage && (
          <div className="p-3 text-sm text-green-700 bg-green-100 rounded-lg">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className={`w-full p-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-lg`}
              {...register("email", {
                required: "Email là bắt buộc",
                pattern: { value: /^\S+@\S+$/i, message: "Email không hợp lệ" },
              })}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Mật khẩu */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mật khẩu
            </label>
            <input
              type="password"
              className={`w-full p-2 border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded-lg`}
              {...register("password", {
                required: "Mật khẩu là bắt buộc",
                minLength: {
                  value: 6,
                  message: "Mật khẩu phải có ít nhất 6 ký tự",
                },
              })}
            />
            {errors.password && (
              <p className="mt-1 text-xs text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Nút Submit */}
          <button
            type="submit"
            disabled={mutation.isPending}
            className="w-full py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 disabled:bg-indigo-400"
          >
            {mutation.isPending ? "Đang Xử Lý..." : "Đăng Ký"}
          </button>
        </form>

        <p className="text-sm text-center text-gray-600">
          Đã có tài khoản?{" "}
          <Link to="/login" className="text-indigo-600 hover:underline">
            Đăng nhập
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
