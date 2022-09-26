async function getConexao(){
    if(global.conexao && global.conexao.state !== 'disconnected')
        return global.conexao;
    
    //importa os pacotes do node mysql2 e promise
    const mysql      = require('mysql2/promise');
    //importa as váriaveis de ambiente
    const bdConfig   = require('./bdconfig.js');
    //cria a conexão
    const conexao = await mysql.createConnection(bdConfig);
    global.conexao = conexao;
        return conexao;
}
//métod que contém o comando para criar a tabela
async function estrurureSe(){
    const conexao = await getConexao();

    const sql = 'CREATE TABLE IF NOT EXISTS livros'+
                '(codigo TINYINT UNSIGNED, '  +
                'nome VARCHAR(60) NOT NULL,' +
                'preco FLOAT NOT NULL, PRIMARY KEY (codigo))';
    
    return await conexao.query(sql);
}

module.exports = {getConexao, estrurureSe}
