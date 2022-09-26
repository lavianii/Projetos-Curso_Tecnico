import { Routes, Route } from "react-router-dom";
import Main from './components/template/Main';
import CrudAluno from './components/CrudAluno/CrudAluno';
import CrudCurso from "./components/CrudAluno/CrudCurso";

export default function Rotas() {
    return (
        // Foi aberto a tag Routes para colocar varias rotas
        // e a tag Route e colocada dentro de Routes pois a tag route
        // e para colocar em cada componente
        <Routes>
            {/* rota para a pagina inicial */}
            <Route exact path="/"
                element={
                    <Main title="Bem Vindo!">
                        <div>Cadastro de alunos, cursos e carômetro</div>
                    </Main>}/>
            
            {/* rota para pagina aluno */}
            <Route path="/alunos" element={<CrudAluno />} />

            {/* caso a pagina nao foi achada na rota exibira essa menssagem*/}        
            <Route path="*" element={
                <Main title="Bem Vindo!">
                    <div>Página não encontrada</div>
                </Main>} />

            {/* rota para pagina curso     */}
            <Route path="/cursos" element={<CrudCurso />} />  

        </Routes>
    )
}