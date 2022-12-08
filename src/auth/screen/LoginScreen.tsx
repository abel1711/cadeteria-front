import { useState } from 'react';
import {
	Avatar,
	Box,
	Button,
	Container,
	CssBaseline,
	Grid,
	TextField,
	Typography,
	InputAdornment,
	IconButton
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PhoneIcon from '@mui/icons-material/Phone';
import { useTheme } from '@mui/material/styles';

import { Formik } from 'formik';
import * as Yup from 'yup';

import { Link } from 'react-router-dom';

import { Copyright, ShowErrors } from '../../components';
import { FormLoginValues } from '../../interfaces/interface';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { startloginUsuario } from '../../redux/slices/auth/authThunks';


export const LoginScreen = () => {

	const theme = useTheme();

	const { isLoading } = useAppSelector(state => state.loading);
	const dispatch = useAppDispatch();

	const [showPassword, setShowPassword] = useState(false)

	return (
		<Container component="main" maxWidth="xs">
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
					MF - Gestiones
				</Typography>

				<Formik
					initialValues={{
						telefono: '',
						password: '',
					}}
					onSubmit={async (values: FormLoginValues, { resetForm }) => {
						dispatch(startloginUsuario(values));
						resetForm();
					}}
					validationSchema={Yup.object({
						telefono: Yup.number().required('Por favor ingresa tu telefono'),
						password: Yup.string().required('Por favor ingresa tu contraseña'),
					})}
				>
					{
						({ errors, handleSubmit, getFieldProps, touched }) => (

							<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
								<TextField
									margin="normal"
									required
									fullWidth
									id="telefono"
									label="Telefono"
									placeholder='54351996699'
									InputProps={{
										startAdornment: (
											<InputAdornment position='start' >
												<PhoneIcon />
											</InputAdornment>
										)
									}}
									{
									...getFieldProps('telefono')
									}
									error={!!errors.telefono && !!touched.telefono}
								/>
								{
									(touched.telefono && errors.telefono) && (
										<Typography component="p"  sx={{
											color: 'error.main'
										}}>
											{errors.telefono}
										</Typography>
									)
								}
								<TextField
									margin="normal"
									required
									fullWidth
									label="Contraseña"
									type={showPassword ? 'text' : 'password'}
									id="contraseña"
									autoComplete="current-password"
									InputProps={{
										startAdornment: (
											<InputAdornment position='start' >
												<IconButton
													onClick={() => setShowPassword(prev => !prev)}
													style={{ padding: 0}}
												>
													{
														showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />
													}
												</IconButton>
											</InputAdornment>
										)
									}}
									error={!!errors.password && !!touched.password}
									{
									...getFieldProps('password')
									}
								/>
								{
									(touched.password && errors.password) && (
										<Typography component="p"  sx={{
											color: 'error.main'
										}}>
											{errors.password}
										</Typography>
									)
								}
								<Button
									type="submit"
									fullWidth
									variant="contained"
									sx={{ mt: 3, mb: 2 }}
									disabled={isLoading}
								>
									Ingresar
								</Button>
								<ShowErrors />
								<Grid container>
									<Grid item xs>
										<Link to="#" style={{
											textDecoration: 'none',
											color: 'inherit',
											...theme.typography.body2
										}}>
											¿Olvidaste tu contraseña?
										</Link>
									</Grid>
									<Grid item>
										<Link to="/registro" style={{
											textDecoration: 'none',
											color: 'inherit',
											...theme.typography.body2

										}}>
											{"¿No tienes una cuenta? Registrate"}
										</Link>
									</Grid>
								</Grid>
							</Box>
						)
					}
				</Formik>
			</Box>
			<Copyright sx={{ mt: 8, mb: 4 }} />
		</Container>
	);
}