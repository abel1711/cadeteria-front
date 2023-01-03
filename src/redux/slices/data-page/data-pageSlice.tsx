import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RespDataPage, Servicio } from '../../../interfaces/interface';
import { RootState } from '../../store';



const initialState: RespDataPage = {
    about: '',
    mision: '',
    objetivos: '',
    servicios: [{
        titulo: '',
        texto: ''
    }],
    ciudades: [''],
    descripcionPACK: {
        descripcion: ''
    },
    descripcionMOTOPACK: {
        descripcion: ''
    }

}

export const dataPageSlice = createSlice({
    name: 'data-page',
    initialState,
    reducers: {
        setDataPage: (state, { payload }: PayloadAction<RespDataPage>) => {
            state.about = payload.about;
            state.mision = payload.mision;
            state.ciudades = payload.ciudades;
            state.objetivos = payload.objetivos;
            state.servicios = payload.servicios;
            state.descripcionPACK = payload.descripcionPACK;
            state.descripcionMOTOPACK = payload.descripcionMOTOPACK;
        }
    },
})

export const { setDataPage } = dataPageSlice.actions

export const selectAuth = (state: RootState) => state.dataPage