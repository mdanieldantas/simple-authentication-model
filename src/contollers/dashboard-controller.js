module.exports = {

  dashboard: (req, res) => {
    // if (!req.session.authenticated){
    //   console.log("Usuário não autenticado");
    //   return res.redirect("/");
    // }
    console.log(req.session.authenticated);
    console.log(req.session.currentUser);
    res.render("dashboard", {
      user: {user:req.session.currentUser},
    });
  },
};
