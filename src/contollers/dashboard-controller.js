const users = require("../models/users");

module.exports = {
  dashboard: (req, res) => {
    const currentUser = req.session.currentUser.username;
    res.render("dashboard", { user: { currentUser } });
  },

  users: (req, res) => {
 
    res.render("users", { users });
  },
};
