// src/api/apiClient.js
import axios from "axios";

// Đặt URL cơ sở (Base URL) cho Backend Node.js/Express
const API_BASE_URL = "http://localhost:3000";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  // Đảm bảo gửi cookies/headers nếu sau này dùng cho xác thực
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Tùy chọn: Thêm Interceptor để xử lý lỗi chung
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Xử lý lỗi HTTP chung (ví dụ: 401 Unauthorized, 500 Server Error)
    if (error.response) {
      console.error("API Error Response:", error.response.data);
      // Ta sẽ ném lỗi này để useMutation xử lý
      return Promise.reject(error);
    } else if (error.request) {
      console.error("API Error Request: No response received", error.request);
    } else {
      console.error("Error in request setup:", error.message);
    }
    return Promise.reject(error);
  }
);

export default apiClient;
