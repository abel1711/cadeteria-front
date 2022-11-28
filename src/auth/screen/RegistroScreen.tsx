import { useState } from 'react';
import {
    Avatar,
    Box,
    Button,
    Container,
    CssBaseline,
    Grid,
    InputAdornment,
    TextField,
    Typography,
    IconButton,
} from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CreateIcon from '@mui/icons-material/Create';
import EmailIcon from '@mui/icons-material/Email';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import SignpostIcon from '@mui/icons-material/Signpost';
import PinIcon from '@mui/icons-material/Pin';
import PlaceIcon from '@mui/icons-material/Place';
import { Copyright } from '../../components/Copyright';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { FormRegistroValues } from '../interfaces/interface';
import PhoneIcon from '@mui/icons-material/Phone';
import { registro } from '../helpers/registro';


export const RegistroScreen = () => {

    const theme = useTheme();
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <Container component="main" maxWidth="xs" >
            <CssBaseline />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Registrate!
                </Typography>
                <Formik
                    initialValues={{
                        nombre: '',
                        telefono: '',
                        email: '',
                        password: '',
                        direccion: {
                            calle: '',
                            numero: '',
                            ciudad: '',
                        }
                    }}
                    validationSchema={Yup.object().shape({
                        telefono: Yup.number().required('Por favor ingresa tu telefono'),
                        password: Yup.string()
                            .required('Por favor ingrese una contraseña')
                            .matches(
                                /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
                                'Debe contener 8 caracteres, una mayuscula, una minuscula y un número',
                            ),
                        nombre: Yup.string().required('Por favor ingresa tu nombre o empresa'),
                        email: Yup.string().required('Por favor ingresa tu email'),
                        direccion: Yup.object().shape({
                            calle: Yup.string().required('Por favor ingresa la calle'),
                            numero: Yup.number().required('Por favor ingresa el numero'),
                            ciudad: Yup.string().required('Por favor ingresa la ciudad')
                        })
                    })}
                    onSubmit={ async (values: FormRegistroValues) => {
                        const nuevoUsuario = await registro(values);
                        alert(JSON.stringify(nuevoUsuario, null, 4))
                    }}
                >
                    {
                        ({ touched, handleSubmit, getFieldProps, errors }) => (
                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            autoComplete="given-name"
                                            required
                                            fullWidth
                                            id="nombre"
                                            label="Nombre o empresa"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position='start' >
                                                        <IconButton>
                                                            <CreateIcon />
                                                        </IconButton>
                                                    </InputAdornment>
                                                )
                                            }}
                                            error={!!touched.nombre && !!errors.nombre}
                                            {
                                            ...getFieldProps('nombre')
                                            }

                                        />
                                        {
                                            (touched.nombre && errors.nombre) && (
                                                <Typography component="p" variant="error1" mt={1}>
                                                    {errors.nombre}
                                                </Typography>
                                            )
                                        }
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email"
                                            autoComplete="email"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position='start' >
                                                        <IconButton>
                                                            <EmailIcon />
                                                        </IconButton>
                                                    </InputAdornment>
                                                )
                                            }}
                                            error={!!touched.email && !!errors.email}
                                            {
                                            ...getFieldProps('email')
                                            }
                                        />
                                        {
                                            (touched.email && errors.email) && (
                                                <Typography component="p" variant="error1" mt={1}>
                                                    {errors.email}
                                                </Typography>
                                            )
                                        }
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            type={'tel'}
                                            id="telefono"
                                            label="Telefono"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position='start' >
                                                        <IconButton>
                                                            <PhoneIcon />
                                                        </IconButton>
                                                    </InputAdornment>
                                                )
                                            }}
                                            error={!!touched.telefono && !!errors.telefono}
                                            {
                                            ...getFieldProps('telefono')
                                            }
                                        />
                                        {
                                            (touched.telefono && errors.telefono) && (
                                                <Typography component="p" variant="error1" mt={1}>
                                                    {errors.telefono}
                                                </Typography>
                                            )
                                        }
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            label="Contraseña"
                                            type={showPassword ? 'text' : 'password'}
                                            id="password"
                                            autoComplete="new-password"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position='start' >
                                                        <IconButton
                                                            onClick={() => setShowPassword(prev => !prev)}
                                                        >
                                                            {
                                                                showPassword
                                                                    ? <VisibilityOffIcon
                                                                    />
                                                                    : <VisibilityIcon
                                                                    />
                                                            }
                                                        </IconButton>
                                                    </InputAdornment>
                                                )
                                            }}

                                            error={!!touched.password && !!errors.password}
                                            {
                                            ...getFieldProps('password')
                                            }
                                        />

                                        {
                                            (touched.password && errors.password) && (
                                                <Typography component="p" variant="error1" mt={1}>
                                                    {errors.password}
                                                </Typography>
                                            )
                                        }
                                    </Grid>
                                    <Typography component="h3" variant="h6" width={'100%'} sx={{
                                        mt: 1,
                                        textAlign: 'center'
                                    }}>
                                        Direccion:
                                    </Typography>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            label="Calle"
                                            type="text"
                                            id="calle"
                                            autoComplete="text"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position='start' >
                                                        <IconButton>
                                                            <SignpostIcon />
                                                        </IconButton>
                                                    </InputAdornment>
                                                )
                                            }}
                                            error={!!touched.direccion?.calle && !!errors.direccion?.calle}
                                            {
                                            ...getFieldProps('direccion.calle')
                                            }
                                        />
                                        {
                                            (touched.direccion?.calle && errors.direccion?.calle) && (
                                                <Typography component="p" variant="error1" mt={1}>
                                                    {errors.direccion?.calle}
                                                </Typography>
                                            )
                                        }
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            label="Numero"
                                            type="text"
                                            id="numero"
                                            autoComplete="text"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position='start' >
                                                        <IconButton>
                                                            <PinIcon />
                                                        </IconButton>
                                                    </InputAdornment>
                                                )
                                            }}
                                            error={!!touched.direccion?.numero && !!errors.direccion?.numero}
                                            {
                                            ...getFieldProps('direccion.numero')
                                            }
                                        />
                                        {
                                            (touched.direccion?.numero && errors.direccion?.numero) && (
                                                <Typography component="p" variant="error1" mt={1}>
                                                    {errors.direccion?.numero}
                                                </Typography>
                                            )
                                        }
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            label="Ciudad"
                                            type="text"
                                            id="ciudad"
                                            autoComplete="text"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position='start' >
                                                        <IconButton>
                                                            <PlaceIcon />
                                                        </IconButton>
                                                    </InputAdornment>
                                                )
                                            }}
                                            error={!!touched.direccion?.ciudad && !!errors.direccion?.ciudad}
                                            {
                                            ...getFieldProps('direccion.ciudad')
                                            }
                                        />
                                        {
                                            (touched.direccion?.ciudad && errors.direccion?.ciudad) && (
                                                <Typography component="p" variant="error1" mt={1}>
                                                    {errors.direccion?.ciudad}
                                                </Typography>
                                            )
                                        }
                                    </Grid>
                                </Grid>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Enviar
                                </Button>
                                <Grid container justifyContent="flex-end">
                                    <Grid item>
                                        <Link to="/login" style={{
                                            textDecoration: 'none',
                                            ...theme.typography.body2
                                        }}>
                                            ¿Ya tienes una cuenta? Ingresa aquí
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        )
                    }
                </Formik>
            </Box>
            <Copyright sx={{ mt: 5 }} />
        </Container>
    );
}