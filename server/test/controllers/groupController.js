const Food = require('../models/GroupModel');

// Controller để tạo mới một món ăn
const createFood = async (req, res) => {
  try {
    const { name, image, start,end } = req.body;
   
    const food = new Food({ name, image , start,end });
    await food.save();
    res.status(201).json(food);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller để lấy tất cả các món ăn
const getAllFood = async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller để lấy một món ăn theo ID
const getFoodById = async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);
    if (!food) {
      return res.status(404).json({ message: 'Không tìm thấy món ăn' });
    }
    res.json(food);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller để cập nhật một món ăn theo ID
const updateFood = async (req, res) => {
  try {
    const {  name, image, start,end } = req.body;
    const food = await Food.findById(req.params.id);
    if (!food) {
      return res.status(404).json({ message: 'Không tìm thấy món ăn' });
    }
    food.name = name;
    food.image = image;
    food.start = start;
    food.end = end;
    await food.save();
    res.json(food);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller để xóa một món ăn theo ID
const deleteFood = async (req, res) => {
  try {
    const food = await Food.findByIdAndDelete(req.params.id);
    if (!food) {
      return res.status(404).json({ message: 'Không tìm thấy món ăn' });
    }
    res.json({ message: 'Xóa món ăn thành công' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createFood,
  getAllFood,
  getFoodById,
  updateFood,
  deleteFood
};