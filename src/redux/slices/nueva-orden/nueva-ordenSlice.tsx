import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store';
import { FormConDomicilioRemitente } from '../../../interfaces/interface';



const initialState = {
    
    tenemosOrden : false,
    orden: {
        puntoOrigen: {
            calle: '',
            numero: '',
            ciudad: '',
            infoAdicional: '',
        },
        infoPaquete: {
            bultos: '',
            largo: '',
            ancho: '',
            alto: '',
            peso: '',
            costo: '',
        },
        tipoDeOrden: '',
        destinatario: {
            datosPersonales: {
                nombre: '',
                telefono: '',
                email: '',
            },
            direccion: {
                calle: '',
                numero: '',
                ciudad: '',
            }
        }

    }
}

export const nuevaOrdenSlice = createSlice({
    name: 'nuevaOrden',
    initialState,
    reducers: {
        setNuevaOrden: (state, { payload }: PayloadAction<FormConDomicilioRemitente>) => {
            state.orden = payload;
            state.tenemosOrden = true
        },
        resetNuevaOrden: ()=>{
            return initialState;
        }
    }
})

export const { setNuevaOrden } = nuevaOrdenSlice.actions

export const selectNuevaOrden = (state: RootState) => state.nuevaOrden