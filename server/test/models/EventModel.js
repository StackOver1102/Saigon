const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    tittle: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    // user_id: {
    //   type: mongoose.Types.ObjectId,
    //   require: true,
    //   ref: "User",
    // }
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;
