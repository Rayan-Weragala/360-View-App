const mongoose = require("mongoose");
const imageSchema = new mongoose.Schema({
  imagePath: {
    type: String,
    required: true,
  },
});

const Image = mongoose.model("Image", imageSchema);

module.exports = Image;