const app = require("../../config/meu_express")
const { response } = require("../../config/meu_express")

const Dao_clientes = require('../BD/Dao_clientes')
const ClientesControllers = require('../controllers/clientesControllers')
const clienteCont = new ClientesControllers()

module.exports = (app) => {

    // Evitar problema com o CORS
    app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*')
            res.header('Access-Control-Allow-Origin', "http://localhost")
            res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
            res.header('Access-Control-Allow-Headers', 'Content-Type')
            next()
    })
   
        app.get('/', function(req,res) {
            res.marko(
            require('../views/telaLogin.marko'))
        })

        
        app.get('/vitrine', function(req,res) {
            res.marko(
            require('../views/telaVitrine.marko'))
        })

        app.get('/', clienteCont.exibeFormAcesso())
        
        app.get('/pedido', clienteCont.listarPedidos())

        app.get('/inclusaopedido', clienteCont.chamarFormInclusaoPedido()) // no botao compraaaaaaaaaaaar

        app.post('/insertBDpedido',clienteCont.incluirPedidoBDr()) //insere que vamos deixar la no final ped
        app.post('/validaBDUsuarios', clienteCont.validaAcessoUsuario())
        
        app.get('/cadastro', clienteCont.CadastroForm()) // no botao compraaaaaaaaaaaar

        app.post('/incluircadstro',clienteCont.incluirCadastroBDr()) 
        
       
        
        
}
