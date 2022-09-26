import './App.css';
function App(props) {

  function Situacao(){
    if(props.nota > 10){
      return "A nota não pode ser mais que 10";
    }else if(props.nota >= 5){
      return "Aprovado";
    }else{
      return "Reprovado";
    }
  }

  return (
    <>
    <div  className="container">
      <h1>Seja bem vindo(a){ props.nome }</h1>
      <p className="p">Sua média final é:<strong>{props.nota}</strong> </p>
      <p className="p">Situação: <strong>{Situacao()}</strong></p>
    </div>
    </>
  );
}

export default App;
