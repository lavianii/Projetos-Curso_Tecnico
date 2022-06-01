const bd = require('./bd');

// faz a inclusão no banco
async function inclua(livro)
{
    const conexao = await bd.getConexao();
    
    const sql     = 'INSERT livros (codigo, nome, preco) VALUES(?,?,?)';
    const dados   =[livro.codigo, livro.nome,livro.preco]
    
    return await conexao.query(sql,dados);
}
// faz o update no banco
async function atualize(livro)
{
    const conexao = await bd.getConexao();
    
    const sql     = 'UPDATE livros SET nome=?, preco=? WHERE codigo=?';
    const dados   = [livro.nome, livro.preco, livro.codigo];

    return await conexao.query(sql,dados);
}

//remove do banco
async function remova (codigo)
{
    const conexao = await bd.getConexao();
    
    const sql     = 'DELETE FROM livros WHERE codigo=?';
    const dados   = [codigo];

    return await conexao.query(sql,dados);
}

//retorna o livro passando o id
async function recuperaUm(codigo)
{
    const conexao = await bd.getConexao();

    const sql       = 'SELECT * FROM livros WHERE codigo=?';
    const dados     =   [codigo];
    const [linhas]  = await conexao.query(sql,dados);

    return linhas;
}

//retorna todos os livros
async function recuperaTodos()
{
    const conexao = await bd.getConexao();

    const sql      = 'SELECT * FROM livros';
    const [linhas] = await conexao.query(sql)
    
    return linhas;
}

module.exports = {inclua, atualize, remova, recuperaUm, recuperaTodos}
