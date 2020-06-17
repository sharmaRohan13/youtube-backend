const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

//Routes
const videoDetailRoute = require("./api/routes/videoDetail");
const videoCommentRoute = require("./api/routes/videoComments");

var uri =
  "mongodb+srv://abhishek:<PassWord>@youtubedbms-vjbjg.mongodb.net/test?retryWrites=true";

mongoose.connect(uri, { useNewUrlParser: true });
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use("/videoDetail", videoDetailRoute);
app.use("/videoComments", videoCommentRoute);

app.use((req, res, next) => {
  const error = new Error("Not FOund");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
      status: error.status
    }
  });
});

module.exports = app;
