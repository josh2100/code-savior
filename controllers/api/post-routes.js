const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Post, User, Comment, Vote } = require("../../models");
const withAuth = require("../../utils/auth");

// We can put all posts in the same table, we just need a "topic property"
// Or, if it's easier, we can just make a new table for each topic

// Get all posts route
router.get("/", async (req, res) => {
  try {
    const response = await Post.findAll({
      attributes: [
        "id",
        "title",
        "topic",
        "post_url",
        "text",
        // "created_at",
        [
          sequelize.literal(
            "(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)"
          ),
          "vote_count",
        ],
      ],
      // order: [["created_at", "DESC"]],
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Comment,
          attributes: [
            "id",
            "comment_text",
            "user_id",
            "post_id",
            "created_at",
          ],
          include: {
            model: User,
            attributes: ["username"],
          },
        },
      ],
    });
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get single post route
router.get("/:id", async (req, res) => {
  try {
    const response = await Post.findOne({
      where: {
        id: req.params.id,
      },
      attributes: [
        "id",
        "title",
        "topic",
        "post_url",
        "text",
        [
          sequelize.literal(
            "(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)"
          ),
          "vote_count",
        ],
      ],
      include: [
        {
          model: User,
          attribute: ["username"],
        },
        {
          model: Comment,
          attributes: [
            "id",
            "comment_text",
            "user_id",
            "post_id",
            "created_at",
          ],
          include: {
            model: User,
            attribute: ["username"],
          },
        },
      ],
    });
    if (!response) {
      res.status(400).json(err);
    }
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a Post route
router.post("/", async (req, res) => {
  try {
    const response = await Post.create({
      title: req.body.title,
      topic: req.body.topic,
      post_url: req.body.post_url,
      text: req.body.text,
      user_id: req.body.user_id,
    });

    res.status(200).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Upvote a post
router.put("/upvote", (req, res) => {
  // Check that session exists
  if (req.session) {
    // Pass session id along with all destructured properties on req.body
    Post.upvote(
      { ...req.body, user_id: req.session.user_id },
      { Vote, Comment, User }
    )
      .then((updatedVoteData) => res.json(updatedVoteData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  }
});

// Update a Post route
router.put("/:id", async (req, res) => {
  try {
    const response = await Post.update(
      {
        title: req.body.title,
        topic: req.body.topic,
        post_url: req.body.post_url,
        text: req.body.text,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (!response) {
      res.status(400).json({ message: "No post to update with that id" });
    }
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete a post route
router.delete("/:id", async (req, res) => {
  try {
    const response = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!response) {
      res.status(400).json({ message: "No post to delete with that id" });
    }

    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
