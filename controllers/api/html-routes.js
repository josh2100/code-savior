const router = require("express").Router();
const { User, Post, Comment, Vote, Question } = require("../../models");

// Questions
// GET all html questions (api/html/questions)

// POST a new html question (api/html/questions)

// Resources
// GET all html posts (api/html/posts)
// Use where: property to only grab posts with topic: html

// POST a new html post (api/html/posts)

// router.get("/:topic/:questions", async (req, res) => {
//     try {
//         const response = await Question.findAll({
//           where: {

//           }
//         })
//     }
// })

// router.get("/", async (req, res) => {
//   try {
//     const response = await Post.findAll({
//         where: {
//             topic = req.body.post_topic
//         },
//       attributes: [
//         "id",
//         "title",
//         "post_text",
//         "created_at",
//         [
//           sequelize.literal(
//             "SELECT COUNT(*) FROM vote WHERE post_id = vote.post.id"
//           ),
//         ],
//       ],
//       order: [["created_at", "DESC"]],
//       include: [
//         {
//           model: User,
//           attributes: ["username"],
//         },
//         {
//           model: Question,
//           attributes: ["q_text"]
//         },
//         {
//           model: Comment,
//           attributes: [
//             "id",
//             "comment_text",
//             "user_id",
//             "post_id",
//             "created_at",
//           ],
//           include: {
//             model: User,
//             attributes: ["username"],
//           },
//         },
//       ],
//     });
//     res.status(200).json(response);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get("/:id", async (req, res) => {
//     try {
//         const response = await Post.findOne({
//           where: {
//             topic: req.body.post_topic,
//             id: req.params.id,
//           },
//           attributes: ["id", "title", "post_topic", "post_text", "created_at"],
//           include: [
//             {
//               model: User,
//               attribute: ["username"],
//             },
//             {
//               model: Question,
//               attribute: ["q_text"],
//             },
//             {
//               model: Comment,
//               attributes: [
//                 "id",
//                 "comment_text",
//                 "user_id",
//                 "post_id",
//                 "created_at",
//               ],
//               include: {
//                 model: User,
//                 attribute: ["username"],
//               },
//             },
//           ],
//         });
//         if (!response) {
//           res.status(400).json(err);
//         }
//         res.status(200).json(response);
//       } catch (err) {
//         res.status(500).json(err);
//       }
// })



module.exports = router;
