import { store } from '../../store';
import { removeLoading, setLoading } from '../loading/loadingSlice';
import { dataPageAPI } from '../../../api/dataPageAPI';
import { FormConDomicilioRemitente } from '../../../interfaces/interface';
import { calcularCostoPaquete } from '../../../utils/calcularCostoPaquete';
import { setNuevaOrden, setPrecioOrden } from './nueva-ordenSlice';
import { ordenesAPI } from '../../../api';
import { getToken } from '../../../utils';



export const startNuevaOrden = ( formulario : FormConDomicilioRemitente )=>{
    return async( dispatch: typeof store.dispatch , getState: typeof store.getState )=>{

        dispatch( setLoading() );

        
        try {
            
            const {data} = await dataPageAPI.get('/precios');

            const precioBase = formulario.tipoDeOrden == '@PACK' ? data.pack.precioBase : data.moto.precioBase;
            const precioFinal = `${calcularCostoPaquete(formulario.infoPaquete, precioBase)}`;


            dispatch(setNuevaOrden(formulario));
            dispatch(setPrecioOrden(precioFinal));
            dispatch( removeLoading())
        } catch (errors: any) {
            console.log(errors)
            dispatch( removeLoading())

        }


    }
}

export const startPostNuevaOrden = ( )=>{
    return async( dispatch: typeof store.dispatch , getState: typeof store.getState )=>{

        dispatch( setLoading() );

        
        try {
            const token = getToken();

            const state = getState().nuevaOrden;
            const {data} = await ordenesAPI.post('/nueva', state.orden, {
                headers:{
                    apiToken: token || ''
                }
            });
            dispatch( removeLoading())
        } catch (errors: any) {
            console.log(errors)
            dispatch( removeLoading())

        }


    }
}