const authMiddleware = (req, res, next) => {
  if (req.session.authenticated) {
    return next();
  }
  return res.redirect("/");
};

const ensureUserAdmin = (req, res, next) => {
  if (req.session.currentUser.role !== "admin") {
    return res.redirect("/dashboard");
  } else {
    return next();
  }
};

module.exports = { authMiddleware, ensureUserAdmin };
