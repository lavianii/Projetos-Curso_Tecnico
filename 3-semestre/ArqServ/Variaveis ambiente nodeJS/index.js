// pacote que usei do node para o banco mysql
let mysql = require('mysql2');

//para utilizar a variavel de ambiente configurada
let bdConfig = require('./bdconfig.js');

//cria a conexão
let conexao = mysql.createConnection(bdConfig);
// faz a conexão
conexao.connect();

//faz o comando sql
conexao.query('select * from cores', function (erro, resultado, tabela) {
  if (erro)
  {
    console.log('Problema na conexão');
  } else 
  {
    //para o ponteiro percorrer pela tabela e mostrar no cmd
    for (let i = 0; i < resultado.length; i++) {
      console.log(resultado[i].id, resultado[i].nome);
    }
  }
});

conexao.end();

//segunda maneira de fazer mas sem as variaveis de ambiente
/*
let mysql = require("mysql2");
let connection = mysql.createConnection({
  host: "seu host",
  user: "seu user",
  password: "sua senha",
  database: "seu banco",
});

connection.query("select * from cores", function (erro, resultado, tabela) {
  if (erro) {
    console.log("Problema na conexão");
  } else {
    for (let i = 0; i < resultado.length; i++) {
      console.log(resultado[i].id, resultado[i].nome);
    }
  }
});
*/
