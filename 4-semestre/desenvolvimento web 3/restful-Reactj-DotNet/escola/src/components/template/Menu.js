import './Menu.css';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AuthService from '../../services/AuthService';

export default function Menu(props) {

    const [currentUser, setCurrenteUser] = useState(undefined);

    useEffect(() => {
        const user = AuthService.getCurrentUser();
        if (user) {
            setCurrenteUser(user);
        }
    }, []);

    return (
        <nav className='menu'>
            <Link to="/alunos">
                Alunos
            </Link>
            <Link to="/cursos">
                Cursos
            </Link>
            <Link to="/carometro">
                Carômetro
            </Link>
            {currentUser ? (
                <Link to="/logout">
                    Logout
                </Link>
            ) : (
                <Link to="/login">
                    Login
                </Link>
            )}
        </nav>
    )
}