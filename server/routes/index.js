const express = require("express");
const Router = express.Router();
const { ensureLoggedin } = require("../middleware/authMiddleware");

// @desc    Root reoute
// @route   GET /
Router.get("/", ensureLoggedin, (req, res) => {
  res.json("Are you trying To hack me ;(");
});

module.exports = Router;
