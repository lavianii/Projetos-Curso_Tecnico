import "./CrudCurso.css";
import { useEffect, useState } from "react";
import axios from 'axios';
import Main from "../template/Main";

const urlCurso = "http://localhost:5075/api/curso";
const title = "Cadastro de Cursos";

export default function CrudCurso() {

    const [curso, setCurso] = useState([]);
    const [post, setPost] = useState();


    //get usando a url
    useEffect(() => {
        axios.get(urlCurso)
            .then((resultado) => {
                setCurso(resultado.data);
            })

    }, [])


    const createPost = () => {
        axios.post(urlCurso, {
            id: 0,
            codCurso: 0,
            nomeCurso: '',
            periodo: ''
        }).then((resultado) => {
            setPost(resultado.data);
            console.log(resultado.data)
        })
        window.location.reload(false);

        if (!post)
            return 'Não aconteceu o post'

    }

    const deletar = (id) => {
        axios.delete(`${urlCurso}/` + id)
        window.location.reload(false);
    }

    return (
        <>
            <Main title={title}>
                <div className="inclui-container">
                    <label> Codigo do curso: </label>
                    <input
                        type="number"
                        id="codigo"
                        placeholder="0"
                        className="form-input"
                        name="codigo"
                        value={post}
                    />
                    <label> Nome do curso: </label>
                    <input
                        type="text"
                        id="nome"
                        placeholder="Nome do curso"
                        className="form-input"
                        name="nome"
                        value={post}
                    />
                    <label> Periodo: </label>
                    <input
                        type="text"
                        id="periodo"
                        placeholder="Periodo"
                        className="form-input"
                        name="periodo"
                        value={post}
                    />
                    <button className="btnSalvar"
                        onClick={() => {
                            window.location.reload(false);
                            createPost()
                        }}
                    >
                        Adicionar
                    </button>
                </div>
                <div className="container-lista">
                    <table className="listaCursos">
                        <thead className="cabecTabela">
                            <tr>
                                <th>Codigo do curso</th>
                                <th>Nome do curso</th>
                                <th>Periodo do curso</th>
                            </tr>
                        </thead>

                        <tbody>
                            {curso.map((cursoMap) => {
                                return (
                                    <tr key={cursoMap.id}>
                                        <td>{cursoMap.codCurso}</td>
                                        <td>{cursoMap.nomeCurso}</td>
                                        <td>{cursoMap.periodo}</td>
                                        <td>
                                            <button onClick={() => {

                                            }} >
                                                Altera
                                            </button>
                                        </td>
                                        <td>
                                            <button onClick={() => deletar(cursoMap.id)} >
                                                Remove
                                            </button>
                                        </td>
                                    </tr>

                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </Main>
        </>
    )

}