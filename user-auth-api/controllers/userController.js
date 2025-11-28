// user-auth-api/controllers/userController.js
const User = require("../models/user");
const bcrypt = require("bcryptjs");

exports.registerUser = async (req, res) => {
  const { email, password } = req.body;

  // 1. Validation cơ bản
  if (!email || !password) {
    return res.status(400).json({ message: "Email và mật khẩu là bắt buộc." });
  }

  try {
    // 2. Kiểm tra email đã tồn tại
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ message: "Email đã được sử dụng." });
    }

    // 3. Băm mật khẩu
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 4. Tạo và lưu người dùng
    const newUser = await User.create({
      email,
      password: hashedPassword,
    });

    // 5. Phản hồi thành công
    return res.status(201).json({
      message: "Đăng ký thành công",
      user: {
        id: newUser.id,
        email: newUser.email,
        createdAt: newUser.createdAt,
      },
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Lỗi máy chủ trong quá trình đăng ký." });
  }
};
