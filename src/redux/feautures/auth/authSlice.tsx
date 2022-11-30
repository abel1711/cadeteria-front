import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store'

// Define a type for the slice state
interface authState {
  token: string | null;
}

// Define the initial state using that type
const initialState: authState = {
    token: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: ( state, action: PayloadAction<string> )=>{
        state.token = action.payload
    },
    resetAll: ()=>{
        return initialState
    }
  },
})

export const { setToken, resetAll } = authSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectAuth = (state: RootState) => state.auth

export default authSlice.reducer