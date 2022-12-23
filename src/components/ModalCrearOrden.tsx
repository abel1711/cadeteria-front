import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import { useAppSelector } from '../redux/hooks';
import { FormSinDomicilioRemitente, FormConDomicilioRemitente } from '../interfaces/interface';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '80%',
 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

interface Props {
    orden: FormSinDomicilioRemitente | FormConDomicilioRemitente;
}

export const ModalCrearOrden = ({ orden }:Props) => {

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-loading"
                aria-describedby="transition-modal-loading"
                open={true}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={true}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2" sx={{
                            color: 'black'
                        }}
                        >
{JSON.stringify(orden, null, 4)}
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}