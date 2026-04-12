const Event = require('../models/EventModel');

// Controller để tạo mới một sự kiện
const createEvent = async (req, res) => {
  try {
    const { image, content, tittle, description } = req.body;
    // const userId = req.user._id; // Lấy id của người dùng từ request, đã được xác thực trước đó
    const event = new Event({ image, content, tittle, description});
    await event.save();
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller để lấy tất cả các sự kiện
const getAllEvents = async (req, res) => {
  try {
    // const events = await Event.find().populate('user_id', 'username'); // Populate thông tin người dùng (chỉ lấy username)
    const events = await Event.find()
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getEventRecent = async(req,res)=>{
  try {
    const events = await Event.find().sort({ createdAt: -1 }).limit(2);
    res.json(events);

  } catch (error) {
    res.status(500).json({ message: error.message });

  }
}
// Controller để lấy một sự kiện theo ID
const getEventById = async (req, res) => {
  try {
    // const event = await Event.findById(req.params.id).populate('user_id', 'username'); // Populate thông tin người dùng (chỉ lấy username)
    const event = await Event.findById(req.params.id)
    if (!event) {
      return res.status(404).json({ message: 'Không tìm thấy sự kiện' });
    }
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller để cập nhật thông tin của một sự kiện
const updateEvent = async (req, res) => {
  try {
    const { image, content } = req.body;
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: 'Không tìm thấy sự kiện' });
    }
    event.image = image;
    event.content = content;
    await event.save();
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller để xóa một sự kiện
const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) {
      return res.status(404).json({ message: 'Không tìm thấy sự kiện' });
    }
    res.json({ message: 'Xóa sự kiện thành công' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
  getEventRecent
};