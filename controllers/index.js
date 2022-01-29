const router = require("express").Router();

const apiRoutes = require("./api/");
const homeRoutes = require("./home-routes.js");
const profileRoutes = require("./profile-routes")
const jsResources = require('./js-resources');
const quizRoutes = require('./quiz-routes');
const htmlResources = require('./html-resources');
const cssResources = require('./css-resources');

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/profile", profileRoutes);
router.use("/js", jsResources);
router.use("/html", htmlResources);
router.use("/css", cssResources);
router.use("/quiz", quizRoutes);

module.exports = router;