module.exports = {
  ensureAuth: (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    } else {
      res.json({ isAuthenticated: false, user: {} });
    }
  },
  ensureLoggedin: (req, res, next) => {
    if (req.isAuthenticated()) {
      res.redirect(`${process.env.CLIENT_URL}`);
    } else {
      return next();
    }
  },
};
