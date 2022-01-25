const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment, Vote} = require("../models");

// Display JS quiz at quiz/js
router.get("/js", (req, res) => {

try {
    res.render("jsquiz");
} catch (error) {
    console.log(error);
    res.status(500).json(err);
}
});

module.exports = router;