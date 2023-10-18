import { useSession } from '../../hooks/useSession';
function Error404() {
    const { userId } = useSession();
    return <div>Error404</div>;

}

export default Error404;
