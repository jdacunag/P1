import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef } from 'react';
import { useLocation } from 'wouter';
import Card from '../components/Card';
import Link from '../components/Link';
import Button from '../components/Button';
import Input from '../components/input';
import Title from '../components/title';
import * as userApi from '../services/user';
import style from './Register.module.css';
import TaskhubLogo from '../images/TaskhubLogo.png';

export default function Register() {
    const [, setLocation] = useLocation();
    const usernameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const username = usernameRef.current?.value;
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;

        if (!username || !email || !password) return;

        try {
            await userApi.create(username, email, password);
            setLocation('/login');
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className={style.container}>
            <div className={style.card}>
                <img className={style.Logo} src={TaskhubLogo} />
                <Card>
                    <form className={style.form} onSubmit={handleSubmit}>
                        <div className={style.brand}>
                            <FontAwesomeIcon icon={faPlus} size="3x" />
                            <Title>Register</Title>
                        </div>

                        <Input inputRef={usernameRef} type="text" placeholder="Username" focus />
                        <Input inputRef={emailRef} type="email" placeholder="Email" />
                        <Input inputRef={passwordRef} type="password" placeholder="Password" />
                        <Button submit icon={faPlus}>
                            Register
                        </Button>

                        <Link href="/login">I already have an account</Link>
                    </form>
                </Card>
            </div>
        </div>
    );
}
