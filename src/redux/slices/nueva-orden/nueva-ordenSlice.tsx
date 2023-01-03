import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store';
import { FormConDomicilioRemitente } from '../../../interfaces/interface';



const initialState: FormConDomicilioRemitente = {
    puntoOrigen: {
        calle: '',
        numero: '',
        ciudad: '',
        infoAdicional: '',
    },
    infoPaquete: {
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
            infoAdicional: '',
        }
    }
}

export const nuevaOrdenSlice = createSlice({
    name: 'nuevaOrden',
    initialState,
    reducers: {
        setNuevaOrden: (state, { payload }: PayloadAction<FormConDomicilioRemitente>) => {
            if(!!payload.puntoOrigen){
                state.puntoOrigen = payload.puntoOrigen;
            }
            state.destinatario = payload.destinatario;
            state.infoPaquete = payload.infoPaquete;
            state.tipoDeOrden = payload.tipoDeOrden;
        }
    }
})

export const { setNuevaOrden } = nuevaOrdenSlice.actions

export const selectNuevaOrden = (state: RootState) => state.nuevaOrden