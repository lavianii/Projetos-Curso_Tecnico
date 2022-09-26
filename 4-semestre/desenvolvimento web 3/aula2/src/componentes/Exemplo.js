function Exemplo(props){
    return(
        <div>
            <h1>Primeiro componente</h1>
            <p>Nome: <strong>{props.nome}</strong></p>
            <p>Idade: {props.idade}</p>
        </div>
    )
}

export default Exemplo;