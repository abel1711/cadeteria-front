import { setErrors, setUsuario } from "./authSlice"
import { FormLoginValues, FormRegistroValues } from "../../../interfaces";
import { store } from "../../store";
import { authAPI, usuariosAPI } from '../../../api';
import { removeLoading, setLoading } from "../loading/loadingSlice";
import { setToken } from "../../../utils";



export const startloginUsuario = ( formValues: FormLoginValues )=>{
    return async( dispatch: typeof store.dispatch , getState: typeof store.getState )=>{

        dispatch( setLoading() );

        try {

            const {data} = await authAPI.post('/login', formValues);

            setToken(data.token)

            dispatch( setUsuario(data))
            dispatch( removeLoading())
            
        } catch (errors: any) {
            console.log(errors.response.data.errors)
            dispatch(setErrors(errors.response.data.errors[0]))
            dispatch( removeLoading())

        }


    }
}

export const startRegisterUsuario = ( formValues: FormRegistroValues)=>{
    return async (dispatch: typeof store.dispatch) => {

        dispatch(setLoading());

        try {
            const {data} = await usuariosAPI.post('/', formValues )

            dispatch( setUsuario(data))
            dispatch( removeLoading())
            
        } catch (errors: any) {
            console.log(errors.response.data.errors)
            dispatch(setErrors(errors.response.data.errors[0]))
            dispatch( removeLoading())
        }
    }
}