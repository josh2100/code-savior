const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User } = require("../models");

// Get and render a homepage
router.get("/", (req, res) => {
  console.log("======================");

  // res.render("homepage", {
  //   loggedIn: req.session.loggedIn,
  // });
});

// Show login, else redirect to homepage
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
