import { useState } from 'react';
import { FormikErrors, FormikTouched } from 'formik';
import { TextField, InputAdornment, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton/IconButton';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

interface PropsInputPassword {
    getFieldProps: any;
    errors: FormikErrors<any>;
    touched: FormikTouched<any>;
    field: string;
    label: string;
    placeholder?: string;
}


export const InputPassword = ({ placeholder, errors, getFieldProps, touched, field, label }: PropsInputPassword) => {

    const [showPassword, setShowPassword] = useState(false)

    return (
        <>
            <TextField
                margin="normal"
                required
                fullWidth
                placeholder={placeholder}
                label={label}
                type={showPassword ? 'text' : 'password'}
                id="contraseña"
                autoComplete="current-password"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position='start' >
                            <IconButton
                                onClick={() => setShowPassword(prev => !prev)}
                                style={{ padding: 0 }}
                            >
                                {
                                    showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />
                                }
                            </IconButton>
                        </InputAdornment>
                    )
                }}
                error={!!errors?.[field] && !!touched?.[field]}
                {
                ...getFieldProps(field)
                }
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
