import { TextField, InputAdornment, Typography } from '@mui/material';
import { FormikErrors, FormikTouched } from 'formik';

interface PropsInput {
    getFieldProps: any;
    errors: FormikErrors<any>;
    touched: FormikTouched<any>;
    icon?: JSX.Element;
    field: string;
    label: string;
    placeholder?: string;
}

export const Input = ({ placeholder, errors, getFieldProps, touched, icon, field, label }: PropsInput) => {

    return (
        <>
            <TextField
                margin="normal"
                required
                fullWidth
                id={label}
                label={label}
                placeholder={placeholder}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position='start' >
                            {icon}
                        </InputAdornment>
                    )
                }}
                {
                ...getFieldProps(field)
                }
                error={!!errors?.[field] && !!touched?.[field]}
            />
            {
                (touched?.[field] && errors?.[field]) && (
                    <Typography component="p" sx={{
                        color: 'error.main'
                    }}>
                        {errors?.[field] as any}
                    </Typography>
                )
            }
        </>
    )
}
