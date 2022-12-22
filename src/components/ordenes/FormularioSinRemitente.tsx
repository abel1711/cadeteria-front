import { Formik } from 'formik';
import * as Yup from 'yup';
import { Box, Grid, Typography, TextField, InputAdornment, Tooltip, Button, MenuItem } from '@mui/material';

interface Props {
    typeOrden: string;
    ciudades: string[];
    nodeRef: any;
}

export const FormularioSinRemitente = ({ typeOrden, ciudades, nodeRef }: Props) => {

    return (
        <div ref={ nodeRef }>
            <Formik
                initialValues={{
                    destinatario: {
                        datosPersonales: {
                            nombre: "",
                            telefono: '',
                            email: ""
                        },
                        direccion: {
                            calle: "",
                            numero: '',
                            ciudad: "",
                            infoAdicional: ""
                        }
                    },
                    infoPaquete: {
                        largo: '',
                        ancho: '',
                        alto: '',
                        peso: '',
                    },

                }}
                validationSchema={Yup.object().shape({
                    destinatario: Yup.object().shape({
                        datosPersonales: Yup.object().shape({
                            nombre: Yup.string().required('El nombre del destinatarío es requerido'),
                            telefono: Yup.string().required('El teléfono del destinatarío es requerido'),
                            email: Yup.string().email('Email invalido').required('El email del destinatarío es requerido'),
                        }),
                        direccion: Yup.object().shape({
                            calle: Yup.string().required('La calle del destinatarío es requerido'),
                            numero: Yup.string().required('El numero de la calle del destinatarío es requerido'),
                            ciudad: Yup.string().required('La ciudad del destinatarío es requerido'),
                            infoAdicional: Yup.string().required('Por favor ingresa información adicional de la casa del destinatarío'),
                        }),
                    }),
                    infoPaquete: Yup.object().shape({
                        largo: Yup.string().required('El largo del paquete es requerido'),
                        ancho: Yup.string().required('El ancho del paquete es requerido'),
                        alto: Yup.string().required('El alto del paquete es requerido'),
                        peso: Yup.string().required('El Peso del paquete es requerido'),

                    })
                })}
                onSubmit={async (values, { resetForm }) => {

                    const formulario = {
                        ...values,
                        tipoDeOrden: typeOrden,
                    }
                    console.log(JSON.stringify(formulario, null, 2))
                }}
            >
                {
                    ({ touched, handleSubmit, getFieldProps, errors, resetForm }) => (
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3, mb: 5 }}>

                            <Grid container spacing={2}>

                                <Grid container item spacing={2} sm={6} >

                                    <Typography component='h1' variant='h5' align='center' width={'100%'} mt={2}>
                                        Datos Destinatario (quien recibe)
                                    </Typography>

                                    <Grid item xs={12}>
                                        <TextField
                                            autoComplete="none"
                                            required
                                            fullWidth
                                            id="nombreDestinatario"
                                            label="Nombre o empresa"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position='start' >
                                                        {/* <CreateIcon /> */}
                                                    </InputAdornment>
                                                )
                                            }}
                                            error={!!touched.destinatario?.datosPersonales?.nombre && !!errors.destinatario?.datosPersonales?.nombre}
                                            {
                                            ...getFieldProps('destinatario.datosPersonales.nombre')
                                            }

                                        />
                                        {
                                            (touched.destinatario?.datosPersonales?.nombre && errors.destinatario?.datosPersonales?.nombre) && (
                                                <Typography component="p" sx={{
                                                    color: 'error.main'
                                                }} mt={1}>
                                                    {errors.destinatario?.datosPersonales?.nombre}
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
                                            autoComplete="none"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position='start' >
                                                        {/* <EmailIcon /> */}
                                                    </InputAdornment>
                                                )
                                            }}
                                            error={!!touched.destinatario?.datosPersonales?.email && !!errors.destinatario?.datosPersonales?.email}
                                            {
                                            ...getFieldProps('destinatario.datosPersonales.email')
                                            }
                                        />
                                        {
                                            (touched.destinatario?.datosPersonales?.email && errors.destinatario?.datosPersonales?.email) && (
                                                <Typography component="p" sx={{
                                                    color: 'error.main'
                                                }} mt={1}>
                                                    {errors.destinatario?.datosPersonales?.email}
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
                                            autoComplete='none'
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position='start' >
                                                        {/* <PhoneIcon /> */}
                                                    </InputAdornment>
                                                )
                                            }}
                                            error={!!touched.destinatario?.datosPersonales?.telefono && !!errors.destinatario?.datosPersonales?.telefono}
                                            {
                                            ...getFieldProps('destinatario.datosPersonales.telefono')
                                            }
                                        />
                                        {
                                            (touched.destinatario?.datosPersonales?.telefono && errors.destinatario?.datosPersonales?.telefono) && (
                                                <Typography component="p" sx={{
                                                    color: 'error.main'
                                                }} mt={1}>
                                                    {errors.destinatario?.datosPersonales?.telefono}
                                                </Typography>
                                            )
                                        }
                                    </Grid>

                                </Grid>


                                <Grid container item spacing={2} sm={6}>
                                    <Typography component="h1" variant="h5" width={'100%'} mt={2} align='center'>
                                        Direccion destinatarío (hasta donde)
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
                                                        {/* <SignpostIcon /> */}
                                                    </InputAdornment>
                                                )
                                            }}
                                            error={!!touched.destinatario?.direccion?.calle && !!errors.destinatario?.direccion?.calle}
                                            {
                                            ...getFieldProps('destinatario.direccion.calle')
                                            }
                                        />
                                        {
                                            (touched.destinatario?.direccion?.calle && errors.destinatario?.direccion?.calle) && (
                                                <Typography component="p" sx={{
                                                    color: 'error.main'
                                                }} mt={1}>
                                                    {errors.destinatario?.direccion?.calle}
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
                                                        {/* <PinIcon /> */}
                                                    </InputAdornment>
                                                )
                                            }}
                                            error={!!touched.destinatario?.direccion?.numero && !!errors.destinatario?.direccion?.numero}
                                            {
                                            ...getFieldProps('destinatario.direccion.numero')
                                            }
                                        />
                                        {
                                            (touched.destinatario?.direccion?.numero && errors.destinatario?.direccion?.numero) && (
                                                <Typography component="p" sx={{
                                                    color: 'error.main'
                                                }} mt={1}>
                                                    {errors.destinatario?.direccion?.numero}
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
                                                            {/* <PlaceIcon /> */}
                                                        </InputAdornment>
                                                    )
                                                }}
                                                error={!!touched.destinatario?.direccion?.ciudad && !!errors.destinatario?.direccion?.ciudad}
                                                {
                                                ...getFieldProps('destinatario.direccion.ciudad')
                                                }
                                            >
                                                {
                                                    ciudades.map(ciudad => (
                                                        <MenuItem key={ciudad} value={ciudad}>{ciudad}</MenuItem>
                                                    ))
                                                }
                                            </TextField>
                                        </Tooltip>
                                        {
                                            (touched.destinatario?.direccion?.ciudad && errors.destinatario?.direccion?.ciudad) && (
                                                <Typography component="p" sx={{
                                                    color: 'error.main'
                                                }} mt={1}>
                                                    {errors.destinatario?.direccion?.ciudad}
                                                </Typography>
                                            )
                                        }
                                    </Grid>
                                    <Grid item xs={12}>

                                        <TextField
                                            required
                                            fullWidth
                                            label="Datos adicionales de la casa"
                                            type="text"
                                            id="infoAdic"
                                            autoComplete="text"
                                            multiline
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position='start' >
                                                        {/* <PlaceIcon /> */}
                                                    </InputAdornment>
                                                )
                                            }}
                                            error={!!touched.destinatario?.direccion?.infoAdicional && !!errors.destinatario?.direccion?.infoAdicional}
                                            {
                                            ...getFieldProps('destinatario.direccion.infoAdicional')
                                            }
                                        />
                                        {
                                            (touched.destinatario?.direccion?.infoAdicional && errors.destinatario?.direccion?.infoAdicional) && (
                                                <Typography component="p" sx={{
                                                    color: 'error.main'
                                                }} mt={1}>
                                                    {errors.destinatario?.direccion?.infoAdicional}
                                                </Typography>
                                            )
                                        }
                                    </Grid>
                                </Grid>



                                <Grid container item spacing={2} sm={6}>
                                    <Typography component="h1" variant="h5" width={'100%'} mt={2} align='center'>
                                        Información del paquete
                                    </Typography>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            label="Largo"
                                            type="number"
                                            id="largo"
                                            inputProps={{ min: 0 }}
                                            placeholder='En centimetros'
                                            autoComplete="none"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position='start' >
                                                        {/* <SignpostIcon /> */}
                                                    </InputAdornment>
                                                )
                                            }}
                                            error={!!touched.infoPaquete?.largo && !!errors.infoPaquete?.largo}
                                            {
                                            ...getFieldProps('infoPaquete.largo')
                                            }
                                        />
                                        {
                                            (touched.infoPaquete?.largo && errors.infoPaquete?.largo) && (
                                                <Typography component="p" sx={{
                                                    color: 'error.main'
                                                }} mt={1}>
                                                    {errors.infoPaquete?.largo}
                                                </Typography>
                                            )
                                        }
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            label="Ancho"
                                            type="number"
                                            id="ancho"
                                            inputProps={{ min: 0 }}
                                            placeholder='En centimetros'
                                            autoComplete="none"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position='start' >
                                                        {/* <PinIcon /> */}
                                                    </InputAdornment>
                                                )
                                            }}
                                            error={!!touched.infoPaquete?.ancho && !!errors.infoPaquete?.ancho}
                                            {
                                            ...getFieldProps('infoPaquete.ancho')
                                            }
                                        />
                                        {
                                            (touched.infoPaquete?.ancho && errors.infoPaquete?.ancho) && (
                                                <Typography component="p" sx={{
                                                    color: 'error.main'
                                                }} mt={1}>
                                                    {errors.infoPaquete?.ancho}
                                                </Typography>
                                            )
                                        }
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            label="Alto"
                                            type="number"
                                            id="alto"
                                            autoComplete="none"
                                            inputProps={{ min: 0 }}
                                            placeholder='En centimetros'
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position='start' >
                                                        {/* <SignpostIcon /> */}
                                                    </InputAdornment>
                                                )
                                            }}
                                            error={!!touched.infoPaquete?.alto && !!errors.infoPaquete?.alto}
                                            {
                                            ...getFieldProps('infoPaquete.alto')
                                            }
                                        />
                                        {
                                            (touched.infoPaquete?.alto && errors.infoPaquete?.alto) && (
                                                <Typography component="p" sx={{
                                                    color: 'error.main'
                                                }} mt={1}>
                                                    {errors.infoPaquete?.alto}
                                                </Typography>
                                            )
                                        }
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            label="Peso"
                                            type="number"
                                            inputProps={{ min: 1 }}
                                            id="peso"
                                            placeholder='En kilogramos'
                                            autoComplete="none"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position='start' >
                                                        {/* <PinIcon /> */}
                                                    </InputAdornment>
                                                )
                                            }}
                                            error={!!touched.infoPaquete?.peso && !!errors.infoPaquete?.peso}
                                            {
                                            ...getFieldProps('infoPaquete.peso')
                                            }
                                        />
                                        {
                                            (touched.infoPaquete?.peso && errors.infoPaquete?.peso) && (
                                                <Typography component="p" sx={{
                                                    color: 'error.main'
                                                }} mt={1}>
                                                    {errors.infoPaquete?.peso}
                                                </Typography>
                                            )
                                        }
                                    </Grid>
                                </Grid>

                                <Grid container item spacing={2} sm={6}>

                                    <Grid item alignItems={'center'} justifyContent='center' display={'flex'} width='100%'>
                                        <Button
                                            type="button"
                                            onClick={() => resetForm()}
                                            fullWidth
                                            variant="outlined"

                                            sx={{ m: 1 }}
                                        // disabled={isLoading}
                                        >
                                            Borrar
                                        </Button>
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            sx={{ m: 1 }}
                                        // disabled={isLoading}
                                        >
                                            Enviar
                                        </Button>

                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                    )
                }
            </Formik>
        </div>
    )
}
