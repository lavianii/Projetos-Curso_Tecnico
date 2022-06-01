let mysql = require('mysql2');
let bdConfig = require('./bdconfig.js');

let conexao = mysql.createConnection(bdConfig);
conexao.connect();

conexao.query('select * from cores', function (erro, resultado, tabela) {
  if (erro)
  {
    console.log('Problema na conexão');
  } else 
  {
    for (let i = 0; i < resultado.length; i++) {
      console.log(resultado[i].id, resultado[i].nome);
    }
  }
});

conexao.end();
/*
let mysql = require("mysql2");
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Jo01082002!@#",
  database: "teste",
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