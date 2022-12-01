import { setErrors, setUsuario, startLoadingUsuario } from "./authSlice"
import { FormLoginValues, FormRegistroValues } from "../../../interfaces";
import { store } from "../../store";
import { authAPI, usuariosAPI } from '../../../api';



export const startloginUsuario = ( formValues: FormLoginValues )=>{
    return async( dispatch: typeof store.dispatch , getState: typeof store.getState )=>{

        dispatch( startLoadingUsuario() );

        try {

            const {data} = await authAPI.post('/login', formValues);

            dispatch( setUsuario(data))

        } catch (errors: any) {
            console.log(errors.response.data.errors)
            dispatch(setErrors(errors.response.data.errors[0]))

        }


    }
}

export const startRegisterUsuario = ( formValues: FormRegistroValues)=>{
    return async (dispatch: typeof store.dispatch) => {

        dispatch(startLoadingUsuario());

        try {
            const {data} = await usuariosAPI.post('/', formValues )

            dispatch( setUsuario(data))

        } catch (errors: any) {
            console.log(errors.response.data.errors)
            dispatch(setErrors(errors.response.data.errors[0]))
        }
    }
}