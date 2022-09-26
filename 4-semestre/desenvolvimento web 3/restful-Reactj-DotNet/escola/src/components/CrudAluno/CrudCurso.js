import "./CrudCurso.css";
import { useState, useEffect } from "react";
export default function CrudCurso() {

    const [curso, setCurso] = useState([]);
    const urlCurso = "http://localhost:5075/api/curso";
    useEffect(() => {

        //faz a requisição para a api busca as informacoes
        fetch(urlCurso)
            .then((resultado) => resultado.json())
            .then((json) => {
                console.log(json);
                //com esse setCurso eu consigo renderizar na pg
                setCurso(json);
            });


    }, []);

    return (
        <>

            <div>
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
                                        <button onClick={() => { }} >
                                            Altera
                                        </button>
                                    </td>
                                    <td>
                                        <button onClick={() => { }} >
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

        </>
    )

}