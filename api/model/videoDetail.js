const mongoose = require("mongoose");

const videoDetail = mongoose.Schema({
  id: String,
  like: Number,
  dislike: Number,
  liked: Boolean,
  disliked: Boolean
});

module.exports = mongoose.model("videoDetail", videoDetail);
