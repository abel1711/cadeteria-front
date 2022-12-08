import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import { useAppSelector } from '../redux/hooks';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    height: '60%',
    maxHeight: 300,
    maxWidth: 400,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export const ModalLoading = () => {
    const show = useAppSelector(state => state.loading.isLoading)
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-loading"
                aria-describedby="transition-modal-loading"
                open={show}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={show}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2" sx={{
                            color: 'inherit'
                        }}
                        >
                            Cargando..
                            <LinearProgress />
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}