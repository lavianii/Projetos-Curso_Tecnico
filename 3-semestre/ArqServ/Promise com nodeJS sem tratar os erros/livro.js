class Livro
{
    #codigo
    #nome
    #preco

    // construtor atualiza os valores usando os setter's
    constructor(codigo, nome, preco)
    {
        this.codigo=codigo;
        this.nome=nome;
        this.preco=preco;
    }
    get codigo()
    {
        return this.#codigo
    }
    get nome()
    {
        return this.#nome
    }

    get preco()
    {
        return this.#preco
    }

    set codigo(codigo)
    {
        if (codigo === undefined || typeof codigo !== 'number' || isNaN(codigo) || codigo !== parseInt(codigo) || codigo<=0 )
        throw ('Código inválida')

        return this.#codigo = codigo;
    }

    set nome(nome)
    {
        if(nome === undefined || typeof nome !== 'string' || nome === "")
        throw ('Nome inválido')
        
        this.#nome = nome;

    }

    set preco(preco)
    {
        if(preco === undefined || typeof preco !== 'number' || isNaN(preco) || preco <= 0)
        throw ('Preço inválido')

        this.#preco = preco;
    }
    
}
//essa função cria um novo livro usando os construtores
function novo (codigo, nome, preco){
    return new Livro(codigo, nome, preco);
}

module.exports ={novo};