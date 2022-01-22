const router = require("express").Router();

const apiRoutes = require("./api/");
const homeRoutes = require("./home-routes.js");
const profileRoutes = require("./profile-routes")
const jsResources = require('./js-resources');
const quizRoutes = require('./quiz-routes');

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/profile", profileRoutes);
router.use("/js", jsResources);
router.use("/quiz", quizRoutes);

module.exports = router;