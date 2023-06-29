import { configureStore } from '@reduxjs/toolkit'
import { userReduces } from '@/src/store/modules/user'
import { coursesReduces, courseReduces } from '@/src/store/modules/course'
import { setUpAxios } from '@/src/plugins/axios'
import { apiSlice } from '@/src/store/api'

setUpAxios()

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    userReduces,
    coursesReduces,
    courseReduces,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
