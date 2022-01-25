const router = require("express").Router();
const { User, Post, Comment, Vote } = require("../../models");
const withAuth = require("../../utils/auth");

// Get all User route
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

// Get one User route
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
          attributes: ["id", "title", "text", "post_url"],
        },
        {
          model: Comment,
          attributes: ["id", "comment_text", "created_at"],
          include: 
            {
              model: Post,
              attributes: ["title"],
            },
        },
        // {
        //   model: Post,
        //   attributes: ["title"],
        //   through: Vote,
        //   attributes: ["voted_posts"],
        // },
      ],
    });

    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Create a User route
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

// Update a User route
router.put("/:id", withAuth, async (req, res) => {
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

// User login route
router.post("/login", async (req, res) => {
  try {
    const response = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!response) {
      res
        .status(400)
        .json({ message: "You entered an incorrect email address!" });
      return;
    }
    const correctPassword = response.checkPassword(req.body.password);

    if (!correctPassword) {
      res.status(400).json({ message: "You entered an incorrect password!" });
      return;
    }

    req.session.save(() => {
      // declare session variables
      req.session.user_id = response.id;
      req.session.username = response.username;
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user: response, message: "You are now successfully logged in!" });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// User logout route
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});


// User delete route
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
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;