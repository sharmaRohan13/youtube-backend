const express = require("express");
const router = express.Router();
const videoComments = require("../model/videoComment");

router.get("/:id", (req, res, next) => {
  videoComments
    .find({ id: req.params.id })
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      res.status(404).json({ err });
    });
});

router.post("/:id", (req, res, next) => {
  const videoComment = new videoComments({
    id: req.params.id,
    comment: req.body.comment
  });
  videoComment
    .save()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

module.exports = router;
