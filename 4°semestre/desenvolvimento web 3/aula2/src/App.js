import Card from './componentes/Card/Card';
import Exemplo01 from './componentes/Exemplo';
import NumeroAleatorio from './componentes/NumeroAleatorio';
import './App.css';
function App() {
    return (
        <div className="App">
            <h1> Exemplos com React</h1>
            <div className="cards">

                <Card titulo="Exemplo">
                    <Exemplo01 nome="Jonas" idade="20" />
                </Card>

                <Card titulo="Numero Aleatorio">
                    <NumeroAleatorio min={20} max={40} />
                </Card>
            </div>
        </div>
    );
}

export default App;