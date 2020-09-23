module.exports = {
  ensureAuth: (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    } else {
      res.redirect("/api");
    }
  },
  ensureLoggedin: (req, res, next) => {
    if (req.isAuthenticated()) {
      res.redirect("/api/loginsuccess");
    } else {
      return next();
    }
  },
};
