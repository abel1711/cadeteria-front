import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';

interface Props {
    children: JSX.Element
}


export const RutasPrivadas = ({children}: Props) => {

    const { token, usuario } = useAppSelector( state=> state.auth );

  return (!!token && !!usuario?.rol)
    ? children
    : <Navigate to={'/'} />
}
