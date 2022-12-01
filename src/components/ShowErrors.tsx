import { Typography } from '@mui/material';
import { useAppSelector } from '../redux/hooks';

export const ShowErrors = () => {
	const error = useAppSelector(state => state.auth.error);
	return (
		<>
			{
				error && (
					<Typography component="p" variant="error1">
						{error.msg}
					</Typography>
				)
			}
		</>
	)
}
