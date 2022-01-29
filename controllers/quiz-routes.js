const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment, Vote } = require("../models");

// Display JavaScript quiz at quiz/js
router.get("/js", (req, res) => {
  try {
    res.render("jsquiz");
  } catch (error) {
    console.log(error);
    res.status(500).json(err);
  }
});

// Display CSS quiz at quiz/css
router.get("/css", (req, res) => {
  try {
    res.render("cssquiz");
  } catch (error) {
    console.log(error);
    res.status(500).json(err);
  }
});

// Display HTML quiz at quiz/html
router.get("/html", (req, res) => {
  try {
    res.render("htmlquiz");
  } catch (error) {
    console.log(error);
    res.status(500).json(err);
  }
});

module.exports = router;
