import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './slices/auth/authSlice';
import { loadingSlice } from './slices/loading/loadingSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    loading: loadingSlice.reducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch