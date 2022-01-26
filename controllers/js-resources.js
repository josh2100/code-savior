const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment, Vote } = require("../models");

// route for main javascript page (js/main)
router.get("/main", (req, res) => {
  res.render("js-main");
});

// get all posts js resources
router.get("/", (req, res) => {
    Post.findAll({
      where: {
        topic: 'js'
      },
      attributes: [
        "id",
        "title",
        "topic",
        "post_url",
        "text",
        "created_at",
        [
          sequelize.literal(
            "(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)"
          ),
          "vote_count",
        ],
      ],
      order: [["created_at", "DESC"]],
      include: [
        {
          model: Comment,
          attributes: ["id", "comment_text", "user_id", "post_id", "created_at"],
          include: {
            model: User,
            attributes: ["username"],
          },
        },
        {
          model: User,
          attributes: ["username"],
        },
      ],
    })
      .then((dbPostData) => {
        const posts = dbPostData.map((post) => post.get({ plain: true }));
        console.log('line 47', posts);
  
        res.render("js", {
          posts,
          loggedIn: req.session.loggedIn,
        });
      })
      .catch((err) => {
        console.log('line 54', err);
        res.status(500).json(err);
      });
  });




module.exports = router;