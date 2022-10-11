import "./Card.css";
export default function Card(props) {
    return(
        <div className="card">
            <div className="img">
                <img src={props.url} alt="foto"/>
            </div>

            <p>{props.children}</p>
        </div>
    )
  
}