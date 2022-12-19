import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton, Box, Divider } from '@mui/material';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ViewListIcon from '@mui/icons-material/ViewList';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import OutputIcon from '@mui/icons-material/Output';
import { Link } from 'react-router-dom';

export const DrawerCliente = () => {

    const [showDrawer, setShowDrawer] = useState(false);

    return (
        <>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => setShowDrawer(true)}
                sx={{
                    mr: 2,
                }}
            >
                <MenuIcon />
            </IconButton>
            <Drawer
                anchor='left'
                open={showDrawer}
                onClose={() => setShowDrawer(false)}
                sx={{
                    width: 300
                }}
            >
                <Box
                role='presentation'
                    sx={{
                        width: 300,
                        padding: 1,
                        paddingTop: 5,
                    }}
                    onClick={() => setShowDrawer(false)}
                    
                >
                    <List>


                        <ListItem disablePadding>
                            <Link
                                to={'nueva-orden'}
                                style={{ color: 'inherit', textDecoration: 'none', display: 'flex', width: '100%' }}
                            >
                                <ListItemButton>
                                    <ListItemIcon>
                                        <AddBoxIcon fontSize='large' />
                                    </ListItemIcon>
                                    <ListItemText primary='Nueva orden' />
                                </ListItemButton>
                            </Link>
                        </ListItem>
                        <ListItem disablePadding>
                            <Link
                                to={'mis-ordenes'}
                                style={{ color: 'inherit', textDecoration: 'none', display: 'flex', width: '100%' }}
                            >
                                <ListItemButton>
                                    <ListItemIcon>
                                        <ViewListIcon fontSize='large' />
                                    </ListItemIcon>
                                    <ListItemText primary='Mis ordenes' />
                                </ListItemButton>
                            </Link>
                        </ListItem>
                        <Divider />
                        <ListItem disablePadding>
                            <Link
                                to={'mi-perfil'}
                                style={{ color: 'inherit', textDecoration: 'none', display: 'flex', width: '100%' }}
                            >
                                <ListItemButton>
                                    <ListItemIcon>
                                        <AccountBoxIcon fontSize='large' />
                                    </ListItemIcon>
                                    <ListItemText primary='Mi perfíl' />
                                </ListItemButton>
                            </Link>
                        </ListItem>
                        <Divider />
                        <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <OutputIcon fontSize='large' />
                                    </ListItemIcon>
                                    <ListItemText primary='Salir' />
                                </ListItemButton>
                        </ListItem>

                    </List>
                </Box>
            </Drawer>
        </>
    )
}
