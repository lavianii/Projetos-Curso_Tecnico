const express   = require('express');
const bd        = require('./bd.js');
const rotas     = require('./rotas.js');

function middleWareGlobal(req, res, next) 
{
    //Marca o inicio da requisiçao
    console.time('Duraçao'); 

    //indica onde aconteceu
    console.log('Iniciou o processamento da requisiçao'+req.metod+'em'+req.url);
    //funçao que chama o processamento, propiamente dito da requisiçao
    next(); 

    // indica onde aconteceu
    console.log('Terminou o processamento da requisiçao'+req.metod+'em'+req.url);

    // Informa duraçao do processamento da requisiçao
    console.timeEnd('Duraçao');
}

async function ativaçaoDoServidor() 
{
    const ret = await bd.estruturese(); // crio  a tabela la no bd   
    //Trato os erros 
    if (ret === null) 
    {
        console.log('Não foi possivel estabelecer conexao com o BD');
        //encerro a aplicaçao
        process.exit(1); 
    }

    if (ret === false) 
    {
        console.log('Não foi possivel estruturar o BD!');
        //encerro a aplicaçao
        process.exit(1); 
    }

    const express   = require('express');
    const app       = express();// criei a minha aplicaçao roteada

   
    app.use(express.json()); // faz com que o express consiga processar json
    app.use(middleWareGlobal);// cria um middleare global

    //Criando minhas rotas
    app.post('/livros'          ,rotas.inclusao);
    app.put('/livros/:codigo'   ,rotas.atualizaçao);
    app.delete('/livros/:codigo',rotas.remoçao);
    app.get('/livros/:codigo'   ,rotas.recuperacaoDeUm);
    app.get('/livros'           ,rotas.recupereTodos);

    console.log('Servidor Rodando na porta 3000');
    app.listen(3000); // 'escutando na porta 3000'
}   

ativaçaoDoServidor();