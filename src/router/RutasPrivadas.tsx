import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';
import { PaginaCliente } from '../screens/PaginaCliente';
import { PaginaCadete } from '../screens/PaginaCadete';
import { PaginaAdministrador } from '../screens/PaginaAdministrador';

interface Props {
    children: JSX.Element
}


export const RutasPrivadas = ({children}: Props) => {

    const { token, usuario } = useAppSelector( state=> state.auth );

  return (!!token && !!usuario?.rol)
    ? children
    : <Navigate to={'/login'} />
}
