class Dao_clientes{
 
    constructor(db) {
    this._db = db
    }
    
 
    listagemPedidos(callback) {
        this._db.query('SELECT `id_ped`, `data_ped`, `cpf_cli`,`ValorGeral` FROM `pedidos`' 
          ,(erro, resultados) =>
            callback(erro,resultados))
      }

  incluirPedido(pedidosr) {
    return new Promise((resolve, reject) => {
    var sqlInclusao = "INSERT INTO PEDIDOS (cpf_cli,valor_prod,qtd) VALUES('" + pedidosr.cpf_cli + "','" +200+ "','" + pedidosr.qtd + "')";
    console.log(sqlInclusao)
      this._db.query(sqlInclusao, function (erro) {
        if (erro) {
          console.log(erro)
          return reject('Não válidado!')
        }
          resolve()
      })
   })
  }
  validaAcessoUsuario(login,senha) {
    return new Promise((resolve, reject) => {
      console.log("LOGIN DA VALIDACAO = " + login);
      console.log("SENHA DA VALIDACAO = " + senha);
          var sqlCons = "SELECT * FROM clientes WHERE email_cli='" + login + 
          "' and senha_cli='" + senha + "'";
            console.log(sqlCons);
                this._db.query(sqlCons, function (erro,resultado) {
             // aqui estou checando se o retorno do SELECT trouxe dados
                  if (resultado.length > 0) {
                    var dados = resultado.length;
                    resolve(dados);
                  }
                   else { 
                    console.log("ACESSO NEGADO");
                    return reject('ACESSO NEGADO!');
                  }
         });
     });
    }
    incluirCadastro(cadastro) {
      return new Promise((resolve, reject) => {
      var sqlInclusao = "INSERT INTO clientes (nome_cli,email_cli,cpf_cli,senha_cli) VALUES('" + cadastro.nome+ "','" +cadastro.email+ "','" + cadastro.cpf + "','" + cadastro.senha + "')"
      console.log(sqlInclusao)
        this._db.query(sqlInclusao, function (erro) {
          if (erro) {
            console.log(erro)
            return reject('Cadastro inválido!')
          }
            resolve()
        })
     })
    }
}
module.exports = Dao_clientes