import "./CrudCurso.css";
import { useEffect, useState } from "react";
import axios from 'axios';
import Main from "../template/Main";

const urlCurso = "http://localhost:5075/api/curso";
const title = "Cadastro de Cursos";

export default function CrudCurso() {

    const [curso, setCurso] = useState([]);

    const [codCurso, setCodCurso] = useState(0);
    const [id, setId] = useState(0);
    const [nomeCurso, setNomeCurso] = useState('');
    const [periodo, setPeriodo] = useState('');
    
    //faz o get
    useEffect(() => {
        axios.get(urlCurso)
        .then((resultado) => {
            setCurso(resultado.data);
            })

    }, [])

    //faz o post
    const fazPost = () => {
        axios.post(`${urlCurso}/`, {
            id,
            codCurso,
            nomeCurso,
            periodo,
        }).then((resultado) => {
            console.log(resultado.data + " Deu certo");
            window.location.reload(false);
        });
        
    }

    //faz o delete
    const deletar = (id) => {
        axios.delete(`${urlCurso}/` + id);
        window.location.reload(false);
    }

    //faz put
    const fazPut = () => {
        axios.put(`${urlCurso}/${id}`, {
            id,
            codCurso,
            nomeCurso,
            periodo
        });
        window.location.reload(false);
    }
    const atualizarCampo = (id, codCurso, nomeCurso, periodo) => {
        setId(id)
        setCodCurso(codCurso)
        setNomeCurso(nomeCurso)
        setPeriodo(periodo)
    }
    const limpaCampo = () => {
        setId();
        setCodCurso(0);
        setNomeCurso('');
        setPeriodo('');
    }
    

    return (
        <>
            <Main title={title}>
                <div className="inclui-container">
                    <strong><label>Id: {id}</label></strong>
                    <label> Codigo do curso: </label>
                    <input
                        type="number"
                        id="codigo"
                        placeholder="0"
                        className="form-input"
                        name="codigo"
                        value={codCurso}
                        onChange={(evento) => {
                            setCodCurso(evento.target.value);
                        }}
                    />
                    <label> Nome do curso: </label>
                    <input
                        type="text"
                        id="nome"
                        placeholder="Nome do curso"
                        className="form-input"
                        name="nome"
                        value={nomeCurso}
                        onChange={(evento) => {
                            setNomeCurso(evento.target.value);
                        }}
                    />
                    <label> Periodo: </label>
                    <input
                        type="text"
                        id="periodo"
                        placeholder="Periodo"
                        className="form-input"
                        name="periodo"
                        value={periodo}
                        onChange={(evento) => {
                            setPeriodo(evento.target.value);
                        }}
                    />
                    <button
                        className="btnSalvar"
                        onClick={() => fazPost()}>

                        Salvar
                    </button>

                    <button
                        className="btnAlterar"
                        onClick={() => fazPut()}>
                     Alterar
                    </button>
                    <button
                        className="btnRemover"
                        onClick={() => limpaCampo() }>

                    Cancelar
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
                                            <button
                                            className="btnAlterar"
                                                onClick={() => {
                                                    atualizarCampo(
                                                        cursoMap.id,
                                                        cursoMap.codCurso,
                                                        cursoMap.nomeCurso,
                                                        cursoMap.periodo
                                                    );
                                                }}
                                            >
                                                Alterar
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                className="btnRemover"
                                                onClick={() => deletar(cursoMap.id)} >
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