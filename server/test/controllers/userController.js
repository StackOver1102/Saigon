const User = require("../models/UserModel");

// Controller để tạo mới một người dùng
const createUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const emailExists = await User.findOne({ username });
    if (emailExists) {
      return res.status(400).json({ message: "Username already exists" });
    }
    const user = await User.create({
      username,
      password,
    });
    if (user) {
      return res.status(201).json({
        message: "Success!",
      });
    } else {
      res.status(400).json({ message: "Invalid User Data" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const loginAdmin = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user && (await user.matchPassword(password))) {
      if (!user.isAdmin) {
        return res.status(401).json({ error: "User not Admin" });
      }
      const { _id, username, isAdmin } = user;
      return res.json({
        status: "OK",
        message: "SUCESS",
        data: {
          _id,
          username,
          isAdmin,
        },
      });
    } else {
      return res.status(401).json({ error: "Invalid Usermame or Password" });
    }
  } catch (error) {
    next(error);
  }
};
// Controller để lấy tất cả các người dùng
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');;
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller để lấy một người dùng theo ID
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "Không tìm thấy người dùng" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller để cập nhật thông tin của một người dùng
const updateUser = async (req, res) => {
  try {
    const { username, password, isAdmin } = req.body;
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "Không tìm thấy người dùng" });
    }
    user.username = username;
    user.password = password;
    user.isAdmin = isAdmin;
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller để xóa một người dùng
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "Không tìm thấy người dùng" });
    }
    res.json({ message: "Xóa người dùng thành công" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  loginAdmin,
};