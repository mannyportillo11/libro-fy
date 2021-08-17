const router = require("express").Router();
const { Vote } = require("../../models");

router.get("/", (req, res) => {
  Vote.findAll()
    .then((dbVoteData) => res.json(dbVoteData))
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

//create a new vote
router.post("/", (req, res) => {
  Vote.create({
    vote_text: req.body.vote_text,
    user_id: req.body.user_id,
    //post_id: req.body.post_id
  })
    .then((dbCommentData) => res.json(dbCommentData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// Delete Vote
router.delete("/", (req, res) => {});

module.exports = router;
