const Menu = require('../models/MenuModel');

// Controller để tạo mới một món ăn trong menu
const createMenu = async (req, res) => {
  try {
    const { images, group_id} = req.body;
    const checkMenuExits = await Menu.findOne({group_id})
    if(checkMenuExits){
      return res.status(409).json({
        message: "Menu đã tồn tại"
      })
    }
    const menu = new Menu({ images, group_id});
    await menu.save();
    res.status(201).json(menu);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller để lấy tất cả các món ăn trong menu
const getAllMenu = async (req, res) => {
  try {
    const origin = req.query.origin
    if(origin == "admin"){
      const menus = await Menu.find().populate("group_id", "name");
      return res.json(menus)
    }
    const menus = await Menu.find()
    res.json(menus);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller để lấy một món ăn từ menu theo ID
const getMenuById = async (req, res) => {
  try {
    const menu = await Menu.findById(req.params.id);
    if (!menu) {
      return res.status(404).json({ message: 'Không tìm thấy món ăn trong menu' });
    }
    res.json(menu);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getMenuByIdFood = async (req, res) => {
  try {
    const menu = await Menu.find({food_id: req.params.id});
    if (!menu) {
      return res.status(404).json({ message: 'Không tìm thấy món ăn trong menu' });
    }
    res.json(menu);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller để cập nhật thông tin của một món ăn trong menu
const updateMenu = async (req, res) => {
  try {
    const { name, images, price, description } = req.body;
    const menu = await Menu.findById(req.params.id);
    if (!menu) {
      return res.status(404).json({ message: 'Không tìm thấy món ăn trong menu' });
    }
    // menu.name = name;
    menu.images = images;
    // menu.price = price;
    // menu.description = description;
    await menu.save();
    res.json(menu);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller để xóa một món ăn khỏi menu
const deleteMenu = async (req, res) => {
  try {
    const menu = await Menu.findByIdAndDelete(req.params.id);
    if (!menu) {
      return res.status(404).json({ message: 'Không tìm thấy món ăn trong menu' });
    }
    res.json({ message: 'Xóa món ăn khỏi menu thành công' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createMenu,
  getAllMenu,
  getMenuById,
  updateMenu,
  deleteMenu,
  getMenuByIdFood
};