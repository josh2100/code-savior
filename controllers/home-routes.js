const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment } = require("../models");

// Get and render a homepage
router.get("/", (req, res) => {
  res.render("homepage", {
    loggedIn: req.session.loggedIn,
  });
});

// Show login, else redirect to homepage
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

// router.get("/post/:id", async (req, res) => {
//   try {
//     const response = await Post.findOne({
//       where: {
//         id: req.params.id,
//       },
//       attributes: [
//         "id",
//         "title",
//         "topic",
//         "post_url",
//         [
//           sequelize.literal(
//             "(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)"
//           ),
//           "vote_count",
//         ],
//       ],
//       include: [
//         {
//           model: Comment,
//           attributes: [
//             "id",
//             "comment_text",
//             "post_id",
//             "user_id",
//             "created_at",
//           ],
//           include: {
//             model: User,
//             attributes: ["username"],
//           },
//         },
//         {
//           model: User,
//         },
//       ],
//     });

//     if (!response) {
//       res.status(400).json({ message: "No post associated with this id" });
//     }
//     // serialize the data
//     const post = dbPostData.get({ plain: true });
//     //pass data to template
//     res.render("single-post", {
//       post,
//       loggedIn: req.session.loggedIn,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

router.get('/post/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
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
      model: Comment,
      attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
      include: {
        model: User,
        attributes: ['username']
      }
    },
    {
      model: User,
    }
  ]
})
  .then(dbPostData => {
    if (!dbPostData) {
      res.status(404).json({ message: 'No post found with this id'});
      return;
    }

    // serialize the data
    const post = dbPostData.get({ plain: true });

    console.log('line 97', post);

    //pass data to template
    res.render('single-post', { 
      post,
      loggedIn: req.session.loggedIn
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
  });

module.exports = router;
