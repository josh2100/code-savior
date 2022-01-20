const router = require("express").Router();

const userRoutes = require("./user-routes");
const postRoutes = require("./post-routes");
const htmlRoutes = require("./html-routes.js");


router.use("/html", htmlRoutes);
router.use("/users", userRoutes);
router.use("/posts", postRoutes);

module.exports = router;