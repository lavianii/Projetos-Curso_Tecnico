import "./CrudCurso.css";
import { useEffect, useState } from "react";
import axios from 'axios';
export default function CrudCurso() {

    const [curso, setCurso] = useState([]);
    const urlCurso = "http://localhost:5075/api/curso";


    useEffect(() => {
        axios.get(urlCurso)
        .then((resultado) => {
            setCurso(resultado.data);
        })

    }, [])

    useEffect(() => {
        console.log(curso);
    }, [curso]);
    

    return (
        <>
            <div className="container">
            
                <table>
                    <thead>
                        <tr>
                            <th >codigo do curso</th>
                            <th >Nome do curso</th>
                            <th >periodo do curso</th>
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
                                        <button onClick={() => { 
                                            axios.delete(`${urlCurso}/` + cursoMap.id)
                                            window.location.reload(false);
                                        }} >
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                                
                            )
                        })}
                    </tbody>
                </table>
                <label> Codigo do curso: </label>
                <input
                    type="txt"
                    id="codigo"
                    placeholder="codigo do curso"
                    className="form-input"
                    name="codigo"
                />
                <label> Nome do curso: </label>
                <input
                    type="txt"
                    id="nome"
                    placeholder="Nome do aluno"
                    className="form-input"
                    name="nome"

                />
                <label> Código do Curso: </label>
                <input
                    type="numero"
                    id="codCurso"
                    placeholder="0"
                    className="form-input"
                    name="codCurso"
                />
                <button>
                    Adicionar
                </button>
            </div>
        </>
    )

}