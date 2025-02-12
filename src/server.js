const express = require('express')
const path = require('node:path')
const router = require('./routes')
const app = express()
const session = require('express-session')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({ extended: true }))

// colocar antes da rota
app.use(session({
    secret: 'palavra-chave-secreta',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }


}))
app.use(router)


const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Servidor iniciado em http://localhost:${PORT}/`))