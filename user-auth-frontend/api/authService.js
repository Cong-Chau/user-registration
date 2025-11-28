// src/api/authService.js
import apiClient from "./apiClient";

/**
 * Hàm gọi API đăng ký người dùng
 * Endpoint: POST /user/register
 * @param {object} userData - { email, password }
 * @returns {Promise<object>}
 */
export const registerUser = async (userData) => {
  // Sử dụng apiClient đã cấu hình, chỉ cần thêm phần path còn lại
  const response = await apiClient.post("/user/register", userData);

  // Axios trả về response.data, chúng ta chỉ cần trả về dữ liệu
  return response.data;
};
