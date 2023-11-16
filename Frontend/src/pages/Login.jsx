import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef } from 'react';
import { useLocation } from 'wouter';
import Card from '../components/Card';
import Link from '../components/Link';
import Button from '../components/Button';
import Input from '../components/input';
import Title from '../components/title';
import useSession from '../hooks/useSession';
import * as userApi from '../services/user';
import style from './Login.module.css';
import TaskhubLogo from '../images/TaskhubLogo.png';

export default function Login() {
    sessionStorage.removeItem('userId');
    
    const [, setLocation] = useLocation();
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const { createSession } = useSession();
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        if (!username || !password) return;

        try {
            const user = await userApi.login(username, password);
            createSession(user.id);
            setLocation('/projects');
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className={style.container}>

            <div >

                <img className={style.Logo} src={TaskhubLogo} />

                <Card>
                    <form className={style.form} onSubmit={handleSubmit}>




                        <div className={style.brand}>
                            <FontAwesomeIcon icon={faUser} size="3x" />
                            <Title>Login</Title>
                        </div>

                        <Input inputRef={usernameRef} type="text" placeholder="Username" focus />
                        <Input inputRef={passwordRef} type="password" placeholder="Password" />
                        <Button submit icon={faUser}>
                            Login
                        </Button>

                        <Link href="/register">I do not have an account</Link>
                    </form>
                </Card>
            </div>
        </div>
    );
}
