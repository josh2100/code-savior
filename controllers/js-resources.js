const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment} = require("../models");

// Get and render a homepage
// router.get("/", (req, res) => {

//   res.render("js", {
//     loggedIn: req.session.loggedIn,
//   });
// });

// get all posts js resources
router.get("/", (req, res) => {
    Post.findAll({
      attributes: [
        "id",
        "title",
        "topic",
        "text",
        // [
        //   sequelize.literal(
        //     "(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)"
        //   ),
        //   "vote_count",
        // ],
      ],
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
        console.log('line 45', dbPostData);
        const posts = dbPostData.map((post) => post.get({ plain: true }));
  
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