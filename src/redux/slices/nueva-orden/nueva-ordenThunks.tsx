import { store } from '../../store';
import { removeLoading, setLoading } from '../loading/loadingSlice';
import { dataPageAPI } from '../../../api/dataPageAPI';
import { FormConDomicilioRemitente, FormSinDomicilioRemitente } from '../../../interfaces/interface';
import { calcularCostoPaquete } from '../../../utils/calcularCostoPaquete';



export const startNuevaOrden = ( formulario : FormConDomicilioRemitente | FormSinDomicilioRemitente )=>{
    return async( dispatch: typeof store.dispatch , getState: typeof store.getState )=>{

        dispatch( setLoading() );

        
        try {
            
            const {data} = await dataPageAPI.get('/precios');

            const precioBase = formulario.tipoDeOrden == '@PACK' ? data.pack.precioBase : data.moto.precioBase;

            calcularCostoPaquete(formulario.infoPaquete, precioBase);
            dispatch( removeLoading())
            
        } catch (errors: any) {
            console.log(errors.response.data.errors)
            dispatch( removeLoading())

        }


    }
}