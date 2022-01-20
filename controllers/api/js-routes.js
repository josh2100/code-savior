// {
//     title: "What does JSON stand for?",
//     answer1: "JavaScript Sequential Oriented Notation",
//     answer2: "JavaScript Object Notation",
//     answer3: "Java Sequence Oriented Notation",
//     answer4: "Java Software Object Notation",
//     correctAnswer: "answer2",
//   },

// router.use("/js", jsRoutes)

const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Post, User, Comment, Vote, Question } = require("../../models");
const withAuth = require("../../utils/auth");


// Get All Questions (api/js)
router.get("/", async (req, res) => {
    try {
    const allQuestions = await Question.findAll({
        where: {
            topic: 'js'
        }
    });
    res.status(200).json(allQuestions);
    } catch (err) {
    res.status(500).json(err);
    }
})

// Create new question (api/js)
router.post("/", async (req, res) => {
  try {
    const newQuestion = await Question.create({
      title: req.body.title,
      topic: req.body.topic,
      answer1: req.body.answer1,
      answer2: req.body.answer2,
      answer3: req.body.answer3,
      answer4: req.body.answer4,
      correctAnswer: req.body.correctAnswer,
    });
    res.status(200).json(newQuestion);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
