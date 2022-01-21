const router = require("express").Router();

const userRoutes = require("./user-routes");
const postRoutes = require("./post-routes");
const htmlRoutes = require("./html-routes.js");
const jsRoutes = require('./js-routes');
const cssRoutes = require('./css-routes');


router.use("/html", htmlRoutes);
router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/js", jsRoutes);
router.use("/css", cssRoutes);

module.exports = router;