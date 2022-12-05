import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RespLogin, Usuario } from '../../../interfaces';
import { RootState } from '../../store'
import { ErrorAuth } from '../../../interfaces/interface';

interface authState {
    token: string | null;
    usuario: Usuario | null;
    error: ErrorAuth | null;

}

const initialState: authState = {
    token: null,
    usuario: null,
    error: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

        setUsuario: (state, action: PayloadAction<RespLogin>) => {
            state.token = action.payload.token;
            state.usuario = action.payload.usuario;
            state.error = null;
        },
        setErrors: (state, action: PayloadAction<ErrorAuth>) => {
            state.error = action.payload
        },
        resetAll: () => {
            return initialState
        }
    },
})

export const { setUsuario, resetAll, setErrors } = authSlice.actions

export const selectAuth = (state: RootState) => state.auth