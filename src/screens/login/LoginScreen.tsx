import {
	Avatar,
	Box,
	Button,
	Container,
	Grid,
	Typography,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PhoneIcon from '@mui/icons-material/Phone';
import { useTheme } from '@mui/material/styles';

import { Formik } from 'formik';
import * as Yup from 'yup';

import { Link } from 'react-router-dom';

import { FormLoginValues } from '../../interfaces/interface';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { startloginUsuario } from '../../redux/slices/auth/authThunks';
import { Copyright, ShowErrors } from '../../components';
import { Input } from '../../components/Input';
import { InputPassword } from '../../components/InputPassword';



export const LoginScreen = () => {

	const theme = useTheme();

	const { isLoading } = useAppSelector(state => state.loading);

	const dispatch = useAppDispatch();


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
						telefono: '543513710124',
						password: '123456Ab',
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
								<Input
									errors={errors}
									getFieldProps={getFieldProps}
									touched={touched}
									field='telefono'
									label='Telefono'
									placeholder='54351996699'
									icon={<PhoneIcon />}
								/>

								<InputPassword 
									errors={errors}
									field='password'
									getFieldProps={getFieldProps}
									label='Contraseña'
									touched={touched}
									placeholder='Ingresa tu contraseña'
								/>

								<Button
									type="submit"
									fullWidth
									variant="contained"
									sx={{ mt: 3, mb: 2 }}
									disabled={isLoading}
								>
									Ingresar
								</Button>

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