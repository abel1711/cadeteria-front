import { AppBar, Toolbar, Typography, Button, useMediaQuery, Theme, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { resetAll } from '../../redux/slices/auth';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { DrawerCliente } from './DrawerCliente';

export const ClienteNavbar = () => {

    const { usuario } = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();

    const matches = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

    const handleSalir = () => {
        dispatch(resetAll());
    }

    return (
        <AppBar >
            <Toolbar>
                <DrawerCliente />
                <Typography variant="h6" component="div">
                    Bienvenido {usuario?.nombre}
                </Typography>


              
            </Toolbar>
        </AppBar>
    )
}
