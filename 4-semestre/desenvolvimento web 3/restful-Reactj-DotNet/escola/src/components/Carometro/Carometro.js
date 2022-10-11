import axios from "axios";
import { useEffect, useState } from "react";
import Main from "../template/Main";
import Card from "../template/Card";

const urlAluno = "http://localhost:5075/api/aluno";
const urlCurso = "http://localhost:5075/api/curso";
const title = "Carômetro"

export default function Carometro() {

    const [cursos, setCursos] = useState([]);
    const [alunos, setAlunos] = useState([]);
    const [selecionaCurso, setselecionaCurso] = useState([cursos]);


    useEffect(() => {
        axios.get(urlCurso, {

        })
            .then((resposta) => {
                console.log(resposta.data);
                setCursos(resposta.data);
            });

    }, []);

    useEffect(() => {
        axios.get(urlAluno)
            .then((resposta) => {
                console.log(resposta.data);
                setAlunos(resposta.data);
            });

    }, []);

    const selecionaCursofunc = (codCurso) => {

        const selecine = cursos.find((curso) => curso.codCurso === codCurso);

        setselecionaCurso(selecine);
    }

    const filtrarAluno = (alunos) => {

        if (selecionaCurso === true) {
          return alunos.filter((aluno) => aluno.codCurso === selecionaCurso.codCurso);
        };
    
        return alunos;
      }

    return (
        <>
            <Main title={title}>
                <label>Selecione o curso: </label>
                <select
                    value={cursos.nomeCurso}
                    onChange={(evento) => selecionaCursofunc(evento.target.value)}
                >
                    <option value="disabled selected hidden">Selecione o Curso</option>
                    {cursos.map((curso) => {
                        return (
                            <option key={curso.id} value={curso.codCurso}>{curso.nomeCurso}</option>
                        );
                    })}
                </select>

                <div
                 className="container-alunos">
                    {filtrarAluno(alunos).map((aluno, index) => {
                        return(
                            <Card
                                
                                key={aluno.id}
                                url={`https://robohash.org/${index}`}
                            >   
                                {aluno.ra} 
                                {aluno.nome} 
                                {aluno.codCurso}
                            </Card>
                        )
                    })}
                </div>

            </Main>

        </>
    )
}