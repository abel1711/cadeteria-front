import { useEffect, useState } from 'react';
import {
    Avatar,
    Box,
    Button,
    Container,
    Grid,
    InputAdornment,
    TextField,
    Typography,
    IconButton,
    MenuItem,
    Tooltip,
} from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CreateIcon from '@mui/icons-material/Create';
import EmailIcon from '@mui/icons-material/Email';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import SignpostIcon from '@mui/icons-material/Signpost';
import PinIcon from '@mui/icons-material/Pin';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import { useTheme } from '@mui/material/styles';

import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { Copyright, ShowErrors } from '../components';
import { FormRegistroValues } from '../interfaces/interface';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { startRegisterUsuario } from '../redux/slices/auth';
import { dataPageAPI } from '../api/dataPageAPI';


export const RegistroScreen = () => {

    const theme = useTheme();

    const [showPassword, setShowPassword] = useState(false);

    const [ciudades, setCiudades] = useState([]);

    const dispatch = useAppDispatch();

    const isLoading = useAppSelector(state => state.loading.isLoading);

    const getCiudades = async () => {
        const { data } = await dataPageAPI.get('ciudades');
        setCiudades(data.ciudades)
    }

    useEffect(() => {
        getCiudades()
    }, [])


    return (
        <Container component="main" maxWidth="xs" >
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
                    onSubmit={async (values: FormRegistroValues, { resetForm }) => {
                        dispatch(startRegisterUsuario(values));
                        resetForm()
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
                                                        <CreateIcon />
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
                                                <Typography component="p" sx={{
                                                    color: 'error.main'
                                                }} mt={1}>
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
                                                        <EmailIcon />
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
                                                <Typography component="p" sx={{
                                                    color: 'error.main'
                                                }} mt={1}>
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
                                                        <PhoneIcon />
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
                                                <Typography component="p" sx={{
                                                    color: 'error.main'
                                                }} mt={1}>
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
                                                            style={{ padding: 0 }}
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
                                                <Typography component="p" sx={{
                                                    color: 'error.main'
                                                }} mt={1}>
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
                                                        <SignpostIcon />
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
                                                <Typography component="p" sx={{
                                                    color: 'error.main'
                                                }} mt={1}>
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
                                                        <PinIcon />
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
                                                <Typography component="p" sx={{
                                                    color: 'error.main'
                                                }} mt={1}>
                                                    {errors.direccion?.numero}
                                                </Typography>
                                            )
                                        }
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Tooltip title='Ciudades donde trabajamos!' placement='right'>

                                            <TextField
                                                required
                                                fullWidth
                                                select
                                                label="Ciudad"
                                                type="text"
                                                id="ciudad"
                                                autoComplete="text"
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position='start' >
                                                            <PlaceIcon />
                                                        </InputAdornment>
                                                    )
                                                }}
                                                error={!!touched.direccion?.ciudad && !!errors.direccion?.ciudad}
                                                {
                                                ...getFieldProps('direccion.ciudad')
                                                }
                                            >
                                                {
                                                    ciudades.sort().map(ciudad => (
                                                        <MenuItem key={ciudad} value={ciudad}>{ciudad}</MenuItem>
                                                    ))
                                                }
                                            </TextField>
                                        </Tooltip>
                                        {
                                            (touched.direccion?.ciudad && errors.direccion?.ciudad) && (
                                                <Typography component="p" sx={{
                                                    color: 'error.main'
                                                }} mt={1}>
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
                                    disabled={isLoading}
                                >
                                    Enviar
                                </Button>
                                <ShowErrors />
                                <Grid container justifyContent="flex-end">
                                    <Grid item>
                                        <Link to="/login" style={{
                                            textDecoration: 'none',
                                            color: 'inherit',
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