import axios from "axios";
import { useEffect, useState } from "react";
import Main from "../template/Main";

const urlAluno = "http://localhost:5075/api/aluno";
const urlCurso = "http://localhost:5075/api/curso";
const title = "Carômetro"

export default function Carometro() {

    const [cursos, setCursos] = useState([]);
    const [alunos, setAlunos] = useState([]);
    const [selecione, setSelecione] = useState(null);


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

    const selecionaCurso = (codCurso) => {

        const selecine = cursos.find((curso) => curso.codCurso === codCurso);

        setSelecione(selecine);
    }

    return (
        <>
            <Main title={title}>
                <label>Selecione o curso: </label>
                <select
                    defaultValue = ""
                    value={cursos.nomeCurso}
                    onChange={(evento) => selecionaCurso(evento.target.value)}
                >
                    <option value="" disabled>Selecione o Curso</option>
                    {cursos.map((curso) => {
                        return (
                            <option key={curso.id} value={curso.codCurso}>{curso.nomeCurso}</option>
                        );
                    })}
                </select>

                <div>
                    {alunos.filter((aluno) => aluno.codCurso === selecione.codCurso)
                    .map((alunoMap) => {
                        return(
                            <div key={alunoMap.id} value={alunoMap.codCurso}>{alunoMap.nomeCurso}</div>
                        )
                    })}
                </div>

            </Main>

        </>
    )
}