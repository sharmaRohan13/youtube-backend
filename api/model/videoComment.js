const mongoose = require("mongoose");

const videoComment = mongoose.Schema({
  id: String,
  comment: String
});

module.exports = mongoose.model("videoComment", videoComment);
