import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store';

interface loadingState {
    isLoading: boolean;
}

const initialState: loadingState = {
    isLoading: false,
}

export const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        setLoading: (state) => {
            state.isLoading = true;
        },
        removeLoading: (state) => {
            state.isLoading = false
        }

    },
})

export const { setLoading, removeLoading } = loadingSlice.actions;

export const selectLoading = (state: RootState) => state.loading;