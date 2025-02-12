let users = [
    {username:"isac", password:"123", role:"admin"},
    {username:"joao", password:"456", role:"standard"},
]


module.exports={
// GET /
    index: (req, res) => {
        res.render("index");
      },
    
      // POST /auth/register
register: (req, res) => {
    const { username, password } = req.body;

    const userAlreadyExists = users.find(user => user.username === username);
    if (userAlreadyExists) {
      return res.status(400).redirect("/");
    }

    const newUser = { username, password, role: "standard" };
    users.push(newUser);

    req.session.authenticated = true;
    req.session.currentUser = newUser;

    return res.redirect("/dashboard");   
},

      // POST /auth/login
login: (req, res) => {  
    const{username, password} = req.body;
    const user  = users.find(user =>user.username === username);
   if (!user) {
    return res.status(400).redirect("/");
   }
   if (user.password !== password) {
    return res.status(400).redirect("/");
   }

   // Autenticar o usuário usando a sessão
   req.session.authenticated = true;
   // Salvar o nome do usuário na sessão
   req.session.currentUser = user;
    return res.redirect("/dashboard");

},

      // GET /auth/logout
logout: (req, res) => {
   req.session.destroy();
   return res.redirect("/"); 
}



}