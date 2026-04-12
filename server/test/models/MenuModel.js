const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema(
  {
 
    images: {
      type: [String],
      required: true,
    },
    group_id:{
        type: mongoose.Types.ObjectId,
        ref:"Group"
    }
  },
  {
    timestamps: true, 
  }
);

const Menu = mongoose.model("Menu", menuSchema);
module.exports = Menu;
