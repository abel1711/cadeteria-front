import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';

import { Link } from 'react-router-dom';


export const NavbarHome = () => {

    const theme = useTheme();

    return (
        <div>
            <AppBar >
                <Toolbar>
                    {/* <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton> */}
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        MF - Gestiones
                    </Typography>

                    <Button color="inherit">
                        <Link to="/login" style={{
                            textDecoration: 'none',
                            color: 'inherit'
                        }}>
                            Ingresar
                        </Link>
                    </Button>

                    <Button color="inherit">
                    <Link to="/registro" style={{
                            textDecoration: 'none',
                            color:'inherit'
                        }}>
                            Regístrate
                        </Link>
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}
