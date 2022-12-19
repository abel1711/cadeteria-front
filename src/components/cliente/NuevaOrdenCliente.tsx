import { useState } from 'react';

import { Box, Typography, FormControlLabel, Avatar, Checkbox, TextField, InputAdornment, MenuItem, Tooltip } from '@mui/material';
import { Container } from '@mui/system';
import AddBoxIcon from '@mui/icons-material/AddBox';

import { FormularioConRemitente } from '../ordenes/FormularioConRemitente';
import { FormularioSinRemitente } from '../ordenes/FormularioSinRemitente';
import { useAppSelector } from '../../redux/hooks';

export const NuevaOrdenCliente = () => {


    const [conDireccionRemitente, setConDireccionRemitente] = useState(false)

    const { descripcionPACK, descriptionMOTOPACK, ciudades } = useAppSelector(state => state.dataPage);

    const [tipoDeOrden, setTipoDeOrden] = useState('@PACK');

    return (
        <Container component="main" maxWidth="lg" >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    paddingTop: 2
                }}
            >
                <Box  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems:'center',
                    maxWidth: 500,
                }}>
                    <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                        <AddBoxIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Crear nueva orden
                    </Typography>
                    <TextField
                        required
                        fullWidth
                        select
                        label="Tipo de envío"
                        type="text"
                        id="ciudad"
                        sx={{ marginTop: 3 }}
                        autoComplete="text"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position='start' >
                                    {/* <PlaceIcon /> */}
                                </InputAdornment>
                            )
                        }}
                        value={tipoDeOrden}
                        onChange={(event) => setTipoDeOrden(event.target.value)}
                    >
                        <MenuItem value={'@PACK'}>@PACK</MenuItem>
                        <MenuItem value={'MOTO@PACK'}>MOTO@PACK</MenuItem>
                    </TextField>
                    <Typography component="p" variant="body2" style={{
                        padding: '10px'
                    }}>
                        {
                            (tipoDeOrden === '@PACK')
                                ? descripcionPACK
                                : descriptionMOTOPACK
                        }
                    </Typography>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={conDireccionRemitente}
                                onChange={(event) => setConDireccionRemitente(event.target.checked)}
                            />
                        }
                        label={`Retirar pedido desde una direccíon distinta a la registrada en tu cuenta`}
                        sx={{
                            marginTop: 3,
                            paddingLeft: 2
                        }}
                    />
                </Box>
                {
                    conDireccionRemitente
                        ? <FormularioConRemitente typeOrden={tipoDeOrden} ciudades={ciudades} />
                        : <FormularioSinRemitente typeOrden={tipoDeOrden} ciudades={ciudades} />
                }
            </Box>
        </Container>
    )
}
