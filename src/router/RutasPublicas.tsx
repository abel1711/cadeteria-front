import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';

interface Props {
    children: JSX.Element 
}

export const RutasPublicas = ({ children }: Props) => {
    const { token } = useAppSelector( state=> state.auth );


    return !token 
      ? children
      : <Navigate to={'/in/usuario'} />
}
