import { AxiosError } from 'axios';
import { setUsuario, startLoadingUsuario } from "./authSlice"
import { FormLoginValues, FormRegistroValues } from "../../../interfaces";
import { store } from "../../store";
import { authAPI, usuariosAPI } from '../../../api';



export const startloginUsuario = ( formValues: FormLoginValues )=>{
    return async( dispatch: typeof store.dispatch , getState: typeof store.getState )=>{

        dispatch( startLoadingUsuario() );

        //realizar la peticion http
        try {

            const {data} = await authAPI.post('/login', formValues);

            dispatch( setUsuario(data))

        } catch (error: any) {
            console.log(error.response.data)
        }


    }
}

export const startRegisterUsuario = ( formValues: FormRegistroValues)=>{
    return async (dispatch: typeof store.dispatch) => {

        dispatch(startLoadingUsuario());

        try {
            const {data} = await usuariosAPI.post('/', formValues )

            dispatch( setUsuario(data))

        } catch (error: any) {
            console.log(error.response.data)
        }
    }
}