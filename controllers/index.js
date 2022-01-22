const router = require("express").Router();

const apiRoutes = require("./api/");
const homeRoutes = require("./home-routes.js");
const profileRoutes = require("./profile-routes")
const jsResources = require('./js-resources')

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/profile", profileRoutes);
router.use("/js", jsResources);

module.exports = router;