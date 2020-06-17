const express = require("express");
const router = express.Router();
const videoDetails = require("../model/videoDetail");

router.get("/:id", (req, res, next) => {
  videoDetails
    .findOne({ id: req.params.id })
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      res.status(500).json({ err });
    });
});

router.post("/:id", (req, res, next) => {
  const videoDetail = new videoDetails({
    id: req.params.id,
    like: req.body.like,
    dislike: req.body.dislike,
    liked: req.body.liked,
    disliked: req.body.disliked
  });
  videoDetail
    .save()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      res.status(500).json({ err });
    });
});

router.patch("/:id", (req, res, next) => {
  videoDetails
    .update(
      { id: req.params.id },
      { $set: { liked: req.body.liked, disliked: req.body.disliked } }
    )
    .then(res => {
      res.status(200).json({ res });
    })
    .catch(e => {
      res.status(200).json({ e });
    });
});

module.exports = router;
