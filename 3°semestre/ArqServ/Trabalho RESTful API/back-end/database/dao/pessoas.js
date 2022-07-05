const bd = require('../bd.js'); //bd é o modulo onde esta a nossa conexao

async function inclua(pessoa) 
{
    const conexao = await bd.getConexao();
    if(conexao == null) {return null}

    try 
    {   
        const sql   ='INSERT INTO pessoas (cpf, nome, cep, complemento, nmrCasa) VALUES (?, ?, ?, ?, ?)';
        const dados = [pessoa.cpf, pessoa.nome, pessoa.cep, pessoa.complemento, pessoa.nmrCasa];
        await conexao.query (sql, dados);
        
        return true;  
    }
    catch (error) 
    {
        return false; // retorno false caso a execuçao tenha dado errado
    }
}

async function atualizaDados (pessoa) 
{
    const conexao = await bd.getConexao();
    if(conexao == null) {return null}
  
    try 
    {
        const sql= 'UPDATE pessoas SET nome=?,cep=?,nmrCasa=?,complemento=?  WHERE cpf=?';
        const dados= [pessoa.nome,pessoa.cep,pessoa.nmrCasa,pessoa.complemento,pessoa.cpf];
        await conexao.query (sql,dados);

        return true;
    } 
    catch (error) 
    {
        return false;
    }
}

async function remova(cpf) 
{
    const conexao = await bd.getConexao();
    if(conexao == null) {return null}
  
    try 
    {
        const sql   = 'DELETE FROM pessoas WHERE cpf=?';
        const dados = [cpf];
        await conexao.query (sql,dados);

        return true;
    } 
    catch (error) 
    {
        return false;
    }
}

async function recupereCadastro(cpf) {

    const conexao = await bd.getConexao();
    if(conexao == null) {return null}

    try 
    {
        const sql       = 'SELECT * FROM pessoas WHERE cpf=?';
        const dados     = [cpf];
        const [linhas]  = await conexao.query (sql,dados); 

        return linhas;
        
    } 
    catch (error) 
    {    
        return false;
    }
}

async function recupereCep(cpf) {

    const conexao = await bd.getConexao();
    if(conexao == null) {return null}

    try 
    {
        const sql       = 'SELECT cep FROM pessoas WHERE cpf=?';
        const dados     = [cpf];
        const [linhas]  = await conexao.query (sql,dados); 

        return linhas;
        
    } 
    catch (error) 
    {    
        return false;
    }
}


module.exports = 
{
    inclua, 
    atualizaDados, 
    remova, 
    recupereCadastro,
    recupereCep,
};