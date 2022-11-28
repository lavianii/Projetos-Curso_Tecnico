import { useNavigate } from "react-router";
import { useState } from "react";
import "./Login.css";
import AuthService from "../../services/AuthService";

export default function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    
    const navigate = useNavigate();

    async function handleSubmit(evento) {
        evento.preventDefault();

        //armazena a senha e o usuario
        const useForm = { username, password };

        //se o usuario preencher errado
        if (!username || !password) {
            setMessage("Preencha o username e a senha para continuar!");
        } else {

            //se o usuaria preencher certo
            AuthService.login(username, password).then(
                () => {
                    console.log("localStorage: " +
                        //ira pegar o usuaario do localStorage
                        localStorage.getItem("user"));
                    navigate("/");
                    window.location.reload(); // atualiza o localStorage
                },
                (error) => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();
                    setMessage(resMessage);
                }
            );
        }
    };

    return (
        <div className="content">
            <h1 className="tituloAuth">Login</h1>
            <form onSubmit={handleSubmit} className="formLogin" >
                <div>
                    <label className="lblLogin" htmlFor="username">Username:

                    </label>

                    <input
                        type="text"
                        value={username}
                        placeholder="Digite o e-mail"
                        className="inputAuth"
                        onChange={({ target }) => {
                            setUsername(target.value);

                            setMessage("");
                        }}
                    />
                </div>
                <div>
                    <label className="lblLogin" htmlFor="senha">Senha:

                    </label>

                    <input
                        type="password"
                        value={password}
                        placeholder="Digite a senha"
                        className="inputAuth"
                        onChange={({ target }) => {
                            setPassword(target.value);

                            setMessage("");
                        }}
                    />
                </div>
                <button type="submit">Login</button>
                <h4 className="msgErro">{message}</h4>
            </form>
        </div>
    );
}
