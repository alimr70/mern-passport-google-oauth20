const express = require("express");
const passport = require("passport");
const Router = express.Router();
const { ensureAuth } = require("../middleware/authMiddleware");

// @desc    Auth with google
// @route   GET /auth/google
Router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// @desc    Google auth callback
// @route   GET /auth/google/callback
Router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect(`${process.env.CLIENT_URL}`);
  }
);

// @desc    Logout user
// @route   /auth/logout
Router.get("/logout", (req, res) => {
  req.logOut();
  res.json({ isAuthenticated: false, user: {} });
});

// @desc    Get current user data
// @route   GET /getCurrentUser
Router.get("/getCurrentUser", ensureAuth, (req, res) => {
  const { displayName, image, email } = req.user;
  res.json({ isAuthenticated: true, user: { displayName, image, email } });
});

module.exports = Router;
