import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { Button } from '@mui/material';
import { resetNuevaOrden } from '../redux/slices/nueva-orden/nueva-ordenSlice';
import { startPostNuevaOrden } from '../redux/slices/nueva-orden/nueva-ordenThunks';
import { convertirMoneda } from '../utils/convertirMoneda';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    overflowY: 'auto'
};


export const ModalCrearOrden = () => {

    const { tenemosOrden, orden } = useAppSelector(state => state.nuevaOrden);

    const dispatch = useAppDispatch();

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-loading"
                aria-describedby="transition-modal-loading"
                open={tenemosOrden}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={tenemosOrden}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h5" component="h2" sx={{
                            color: 'inherit'
                        }}
                        >{`Estas por crear el siguiente pedido de envio... a travez de ${orden.tipoDeOrden}, por favor controla que este bien la información`}

                        </Typography>
                        {
                            !!orden.puntoOrigen && (
                                <Box sx={{
                                    marginTop: 2
                                }}>
        
                                    <Typography id="transition-modal-title" variant="h6" component="h2" sx={{
                                        color: 'inherit'
                                    }}
                                    >Retiramos desde:</Typography>
                                    <Box sx={{
                                        marginLeft: 10
                                    }}>
                                        <Typography id="transition-modal-title" variant="body1" component="p" sx={{
                                            color: 'inherit'
                                        }}
                                        >DIRECCION: {`${orden.puntoOrigen.calle} - ${orden.puntoOrigen.numero} - ${orden.puntoOrigen.ciudad} - (${orden.puntoOrigen.infoAdicional})`}</Typography>
                                    </Box>
                                </Box>
                            )
                        }
                        <Box sx={{
                            marginTop: 2
                        }}>

                            <Typography id="transition-modal-title" variant="h6" component="h2" sx={{
                                color: 'inherit'
                            }}
                            >Envias a:</Typography>
                            <Box sx={{
                                marginLeft: 10
                            }}>

                                <Typography id="transition-modal-title" variant="body1" component="p" sx={{
                                    color: 'inherit'
                                }}
                                >NOMBRE: {orden.destinatario.datosPersonales.nombre}</Typography>
                                <Typography id="transition-modal-title" variant="body1" component="p" sx={{
                                    color: 'inherit'
                                }}
                                >EMAIL: {orden.destinatario.datosPersonales.email}</Typography>
                                <Typography id="transition-modal-title" variant="body1" component="p" sx={{
                                    color: 'inherit'
                                }}
                                >TELEFONO: {orden.destinatario.datosPersonales.telefono}</Typography>
                                <Typography id="transition-modal-title" variant="body1" component="p" sx={{
                                    color: 'inherit'
                                }}
                                >DIRECCION: {`${orden.destinatario.direccion.calle} - ${orden.destinatario.direccion.numero} - ${orden.destinatario.direccion.ciudad}- (${orden.destinatario.direccion.infoAdicional})`}</Typography>
                            </Box>
                        </Box>
                        <Box sx={{
                            marginTop: 2
                        }}>

                            <Typography id="transition-modal-title" variant="h6" component="h2" sx={{
                                color: 'inherit'
                            }}
                            >Información del/los paquetes:</Typography>
                            <Box sx={{
                                marginLeft: 10
                            }}>

                                <Typography id="transition-modal-title" variant="body1" component="p" sx={{
                                    color: 'inherit'
                                }}
                                >Cantidad de bultos: {orden.infoPaquete.bultos}</Typography>
                                <Typography id="transition-modal-title" variant="body1" component="p" sx={{
                                    color: 'inherit'
                                }}
                                >Medida del paquete: {`${orden.infoPaquete.alto}cm X ${orden.infoPaquete.ancho}cm X ${orden.infoPaquete.largo}cm`}</Typography>
                                <Typography id="transition-modal-title" variant="body1" component="p" sx={{
                                    color: 'inherit'
                                }}
                                >Peso de cada paquete: {orden.infoPaquete.peso} Kg.</Typography>
                            </Box>
                        </Box>
                        <Typography id="transition-modal-title" variant="h6" component="h2" sx={{
                            color: 'inherit',
                            marginTop: 2
                        }}
                        >Costo total: {convertirMoneda(Number(orden.infoPaquete.costo))}</Typography>
                        <Box sx={{
                            // position:'absolute',
                            display: 'flex',
                            justifyContent: 'end',
                            marginTop: 10
                        }}>
                            <Button
                                type="button"
                                fullWidth
                                variant="outlined"
                                sx={{ m: 1 }}
                                onClick={() => { dispatch(resetNuevaOrden()) }}
                            >
                                Cancelar
                            </Button>
                            <Button
                                type="button"
                                fullWidth
                                variant="contained"
                                sx={{ m: 1 }}
                                onClick={() => dispatch(startPostNuevaOrden())}
                            >
                                Crear
                            </Button>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}