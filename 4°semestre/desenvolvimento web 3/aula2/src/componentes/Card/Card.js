import './Card.css'
function Cards(props){
   
    return(
        <div className="card">
            <div className="titulo">{props.titulo}</div>
            <div className="conteudo">{props.children}</div>
        </div>
    );
}
export default Cards;