const authMiddleware = (req, res, next) => {
    if (req.session.authenticated) {
      return next();
    }
    return res.redirect("/");
}

module.exports = authMiddleware;