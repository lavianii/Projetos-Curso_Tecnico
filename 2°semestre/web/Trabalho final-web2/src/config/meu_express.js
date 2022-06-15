require('marko/node-require').install()
require('marko/express')


const session = require('express-session')
const express_store = require('express-mysql-session')(session)

const express = require('express')
const app = express()

const methodOverride = require('method-override')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))

// rotas é a intancia do módulo rota
const rotas = require('../app/rotas/rotas')
// associar a aplicação app com rotas
rotas(app)
var opcoes = {
    host:'localhost',
    port:3306,
    user:'root',
    password:'',
    database:'trabalhofinal'
   }
   var session_store = new express_store(opcoes)

// sempre que precisar fazer referencia a um arquivo externo dentro do MARKO
// precisa criar um caminho de diretório
app.use('/cssCadastro',express.static('src/app/views/css/telaCadastro.css'))
app.use('/cssPedido',express.static('src/app/views/css/telaPedido.css'))
app.use('/cssfinal',express.static('src/app/views/css/finalPed.css'))
app.use('/cssvitrine',express.static('src/app/views/css/Vitrine.css'))

app.use(session({
    secret: 'odesempre',
    saveUninitialized: true,
    resave: false,
    store: session_store,
    cookie: { secure: true }
}))



module.exports = app