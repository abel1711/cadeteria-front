import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RespLogin, Usuario } from '../../../interfaces';
import { RootState } from '../../store'
import { ErrorAuth } from '../../../interfaces/interface';

interface authState {
    token: string | null;
    isLoading: boolean;
    usuario: Usuario | null;
    error: ErrorAuth | null;

}

const initialState: authState = {
    token: null,
    isLoading: false,
    usuario: null,
    error: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        startLoadingUsuario: (state) => {
            state.isLoading = true;
        },
        setUsuario: (state, action: PayloadAction<RespLogin>) => {
            state.token = action.payload.token;
            state.usuario = action.payload.usuario;
            state.isLoading = false;
            state.error = null;
        },
        setErrors: (state, action: PayloadAction<ErrorAuth>) => {
            state.isLoading = false;
            state.error = action.payload
        },
        resetAll: () => {
            return initialState
        }
    },
})

export const { setUsuario, resetAll, startLoadingUsuario, setErrors } = authSlice.actions

export const selectAuth = (state: RootState) => state.auth