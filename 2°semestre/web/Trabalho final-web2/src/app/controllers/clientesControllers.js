const dao_CLIENTES = require('../BD/Dao_clientes')
// instância do BD configurado
var db = require('../../config/database')
class ClientesControllers
{
    

    listarPedidos() {
        return function (req, res) {
            const clienteDAO = new dao_CLIENTES(db)
               clienteDAO.listagemPedidos(function (erro, resultadosClientes) {
                  console.log(resultadosClientes)
                    res.marko(require('../views/telaPedido.marko'), { clientes:resultadosClientes })
                                    
               })
    }}

    chamarFormInclusaoPedido() 
    {
    return function (req, res) 
    {
        res.marko(
             require('../views/finalped.marko'))
                console.log('Acessou')
        }
    }
    incluirPedidoBDr() 
    {
        return function (req, res) 
        {
            const clienteDAO = new dao_CLIENTES(db)
            clienteDAO.incluirPedido(req.body)
                .then(res.redirect('/pedido'))
                .catch(erro => console.log(erro))
        }
    }
    exibeFormAcesso() { 
        return function(req, res) {
            res.marko(
                require('../views/telaLogin.marko')) 
        }
    }
    validaAcessoUsuario() {
        return function(req, res) 
        {
            const usuarioDAO = new dao_CLIENTES(db)
                usuarioDAO.validaAcessoUsuario(req.body.login,req.body.senha) 
                    .then(dados => 
                    {
                        if (dados > 0)  
                        {
                            console.log("LOGIN DA VALIDACAO = " + req.body.login)
                            console.log("SENHA DA VALIDACAO = " + req.body.senha)
                            res.redirect('/vitrine')
                            //req.session.authentication = true;
                            
    
                                //
                            // criando 2 variaveis de sessao: LOGIN e SENHA
                           /* req.session.login = req.body.login;
                            req.session.senha = req.body.senha;
                            req.session.save();
                            console.log("Variavel de Sessao LOGIN = " + req.session.login)
                            console.log("Variavel de Sessao SENHA = " + req.session.senha)
                            console.log("CRIOU AS VARIAVIES DE SESSAO");
                            res.redirect('/vitrine')*/
                            
                        }
                    })
                    .catch(erro => res.redirect('/'))
        }        
                    
    }
    CadastroForm() {
    return function (req, res) {
        res.marko(
             require('../views/telaCadastro.marko'))
                console.log('Cadstrou')
        }
    }
    incluirCadastroBDr() 
    {
        return function (req, res) 
        {
            const clienteDAO = new dao_CLIENTES(db)
            clienteDAO.incluirCadastro(req.body)
                .then(res.redirect('/'))
                .catch(erro => console.log(erro))
        }
    }
}
module.exports = ClientesControllers