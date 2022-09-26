(async () => {
    const bd =require('./bd');
    const livros=require('./livros');

    console.log('CREATE TABLE IF NOT EXISTS livros (codigo TINYINT UNSIGNED, nome VARCHAR(60) NOT NULL,preco FLOAT NOT NULL, PRIMARY KEY (codigo)');
    
    const result0 = await bd.estrurureSe();
    console.log(result0);

    console.log('INSERT INTO LIVROS VALUES (1", A República (Platão)", 77.77');
    const result1 = await livros.inclua({codigo:1, nome: " A República (Platão)", preco: 77.77});
    console.log(result1);

    console.log('INSERT INTO LIVROS VALUES(2,"A Política (Aristóteles)", 44.44');
    const result2 = await livros.inclua({codigo:2, nome: "Política (Aristóteles)", preco:44.44});
    console.log(result2);

    console.log('SELECT * FROM LIVROS');
    const result3 = await livros.recuperaTodos ();
    console.log(result3);

    console.log('SELECT * FROM LIVROS WHERE codigo=2');
    const result4 = await livros.recuperaUm(2);
    console.log(result4);

    console.log('UPDATE LIVROS SET preco=88.88 WHERE codigo=2');
    const result5 = await livros.atualize({codigo:2, nome: "Jonas (Jonas)", preco:88.88});
    console.log(result5)

    console.log('SELECT * FROM LIVROS WHERE codigo=2');
    const result6 = await livros.recuperaUm(2);
    console.log(result6);

    console.log('DELETE FROM LIVROS WHERE codigo=4');
    const result7 = await livros.remova(2);
    console.log(result7);

    console.log('SELECT * FROM LIVROS WHERE codigo=2');
    const result8 = await livros.recuperaUm(2);
    console.log(result8);
    
    process.exit(1);
})();