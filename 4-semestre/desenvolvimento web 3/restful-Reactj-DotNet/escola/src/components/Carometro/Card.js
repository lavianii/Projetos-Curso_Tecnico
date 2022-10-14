import "./Card.css";
export default function Card(props) {
    return(
        <div className="card">
            <img src={props.img} alt="foto"/>
            
            <div className="p">
                <p className="ra">{props.ra}</p>
                <p className="nome">{props.nome}</p>
                <p className="codCurso">{props.codCurso}</p>
            </div>
       </div>
    )
  
}