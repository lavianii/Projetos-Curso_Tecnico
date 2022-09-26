const mysql = require('mysql');
const connection = mysql.createConnection({
host : 'localhost',
user : 'root',
password : '',
database : 'trabalhofinal'
})
connection.connect(function(err) {
    if (err)
        console.log('Erro na CONEXÃO')
    else
        console.log('CONEXÃO com o BANCO DE DADOS OK!')
})
module.exports = connection;

