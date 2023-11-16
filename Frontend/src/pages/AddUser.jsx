import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useRef, useEffect, useState } from 'react';
import { useLocation, useParams } from 'wouter';
import Card from '../components/Card';
import Button from '../components/Button';
import Title from '../components/title';
import * as projectApi from '../services/project';
import * as userApi from '../services/user';
import style from './AddUser.module.css';
import useSession from '../hooks/useSession';

export default function AddUser() {
    const [, setLocation] = useLocation();
    const { projectId } = useParams();
    const { userId } = useSession();
    const [Users, setUsers] = useState([]);
    const idRef = useRef(null);
    const rolRef = useRef(null);
    useEffect(() => {
        if (!userId) {
            setLocation('/login');
            return;
        }
        (async () => {
            try {
                const userList = await userApi.getAll();
                const aux = userList.data.filter(user => user.id !== userId);
                setUsers(aux);
            } catch (error) {
                alert(error.message);
            }
        })();
    }, []);
    const handleOnAdd = async (e) => {
        e.preventDefault();
        const userId = idRef.current?.value;
        const rol = rolRef.current?.value;

        try {

            await projectApi.InviteUser(projectId, userId, rol);
            setLocation(`/projects/${projectId}`);
        } catch (error) {
            alert(error.message);
        }
    };
    return (
        <div className={style.container}>
            <div className={style.card}>
                <Card>
                    <form className={style.form} onSubmit={handleOnAdd}>
                        <Title> Add Users</Title>
                        <select className={style.select} ref={idRef}>
                            <option value=""></option>
                            {Users.map((user) => (
                                <option key={user.id} value={user.id}>{user.username}</option>
                            ))}
                        </select>
                        <select className={style.select} ref={rolRef}>
                            <option value="leader">leader</option>
                            <option value="member">member</option>
                            <option value="expecter">expecter</option>
                        </select>
                        <Button icon={faPlus} submit>Add user</Button>
                    </form>
                </Card>
            </div>
        </div>
    );
}
