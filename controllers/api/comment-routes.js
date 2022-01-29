const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Comment, User, Post } = require("../../models");

// Get all comments
router.get("/", async (req, res) => {
  try {
    const response = await Comment.findAll({});
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get a single comment
router.get("/:id", async (req, res) => {
  try {
    const response = await Comment.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Post,
          attributes: ["id", "title", "topic", "post_url", "text"],
          include: {
            model: User,
            attributes: ["username"],
          },
        },
      ],
    });

    if (!response) {
      res.status(400).json({ message: "No comment associated with this id" });
    }
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create A Comment
router.post("/", async (req, res) => {
  try {
    const response = await Comment.create({
      comment_text: req.body.comment_text,
      user_id: req.session.user_id,
      post_id: req.body.post_id,
    });
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete A Comment
router.delete("/:id", async (req, res) => {
  try {
    const response = await Comment.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!response) {
      res.status(200).json({ message: "No comment associated with this id" });
    }

    res.status(200).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
