async function getConexao(){
    if(global.conexao && global.conexao.state !== 'disconnected')
        return global.conexao;
    

    const mysql      = require('mysql2/promise');
    const bdConfig   = require('./bdconfig.js');

    const conexao = await mysql.createConnection(bdConfig);
    global.conexao = conexao;
        return conexao;
}

async function estrurureSe(){
    const conexao = await getConexao();

    const sql = 'CREATE TABLE IF NOT EXISTS livros'+
                '(codigo TINYINT UNSIGNED, '  +
                'nome VARCHAR(60) NOT NULL,' +
                'preco FLOAT NOT NULL, PRIMARY KEY (codigo))';
    
    return await conexao.query(sql);
}

module.exports = {getConexao, estrurureSe}