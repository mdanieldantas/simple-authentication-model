module.exports = {

  dashboard: (req, res) => {
    // if (!req.session.authenticated){
    //   console.log("Usuário não autenticado");
    //   return res.redirect("/");
    // }
    console.log(req.session.authenticated);
    console.log(req.session.currentUser);
    const currentUser = req.session.currentUser.username;
    res.render("dashboard", {user: {currentUser}});
  },
};
