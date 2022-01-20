const router = require("express").Router();
const bcrypt = require("bcrypt");
const { User, Post, Comment, Vote } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const response = await User.findAll({
      attributes: { exclude: ["password"] },
    });

    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const response = await User.findOne({
      attributes: { exclude: ["password"] },
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Post,
          attributes: ["id", "title", "post_text", "created_at"],
        },
        {
          model: Comment,
          attributes: ["id", "comment_text", "created_at"],
          include: [
            {
              model: Post,
              attributes: ["title"],
            },
          ],
        },
        {
          model: Post,
          attributes: ["title"],
          through: Vote,
          attributes: ["voted_posts"],
        },
      ],
    });

    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const response = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    req.session.save(() => {
      req.session.user_id = response.id;
      req.session.username = response.username;
      req.session.loggedIn = true;
    });

    res.status(200).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const response = await User.update(req.body, {
      individualHooks: true,
      where: {
        id: req.params.id,
      },
    });

    if (!response) {
      res.status(400).json({ message: "no user found with this id" });
    }

    res.status(200).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const response = await User.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!response) {
      res.status(400).json({ message: "No user found with this id" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
