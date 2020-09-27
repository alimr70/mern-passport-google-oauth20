const express = require("express");
const Router = express.Router();
const { ensureLoggedin } = require("../middleware/authMiddleware");

// @desc    Root reoute
// @route   GET /
Router.get("/", ensureLoggedin, (req, res) => {
  res.json("You need to log in!");
});

module.exports = Router;
