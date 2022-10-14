import axios from "axios";
import { useEffect, useState } from "react";
import Main from "../template/Main";
import Card from "./Card";

const urlAluno = "http://localhost:5075/api/aluno";
const urlCurso = "http://localhost:5075/api/curso";
const title = "Carômetro"

export default function Carometro() {

  const [cursos, setCursos] = useState([]);
  const [alunos, setAlunos] = useState([]);
  const [selecionaCurso, setselecionaCurso] = useState([cursos]);

  useEffect(() => {
    axios(urlAluno).then((resposta) => {
      setAlunos(resposta.data);
    });
  }, []);

  useEffect(() => {
    axios(urlCurso).then((resposta) => {
      setCursos(resposta.data);
    });
  }, []);

  const selecionaCursoFunc = (codCurso) => {
    const curso = cursos.find((curso) => String(curso.codCurso) === codCurso);

    setselecionaCurso(curso);
  };

  const selecionaAlunoFunc = (alunos) => {
    if (selecionaCurso) {
      return alunos.filter((aluno) => aluno.codCurso === selecionaCurso.codCurso);
    }

    return alunos;
  };

  return (
    <Main title={title}>
      <div className="container">
        <div>
          <label>Selecione o curso: </label>
          <select
            onChange={(event) => selecionaCursoFunc(event.target.value)}
            value={
              selecionaCurso ? cursos.find((curso) => curso.nomeCurso === selecionaCurso.nomeCurso)?.codCurso : ""
            }
          >
            <option>
              Todos os cursos
            </option>
            {cursos.map((cursoMap) => (
              <option value={cursoMap.codCurso} key={cursoMap.codCurso}>
                {cursoMap.nomeCurso}
              </option>
            ))}
          </select>
        </div>
        {selecionaAlunoFunc(alunos)
          .map((aluno, i) => (
            <Card
              key={aluno.id}
              img={`https://robohash.org/${i}`}
              ra={aluno.ra}
              nome={aluno.nome}
              codCurso={aluno.codCurso}
            />
          ))}
      </div>
    </Main>
  );
}

