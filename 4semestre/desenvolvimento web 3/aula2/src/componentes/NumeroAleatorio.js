function NumeroAleatorio(props){

    const{ min, max } = props;
    let numero = Math.floor(Math.random() * (max - min)) + min;
    return(
        <>
            <h1>Numero Aleatorio: {numero}</h1>
        </>
    )
}
export default NumeroAleatorio;