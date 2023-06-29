'use client'

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TUser } from '@/src/types'
import { RootState } from '@/src/store'

type TUserState = {
  user: TUser | null
  token: string | null
  refreshToken: string | null
}

const initialState: TUserState = {
  user: null,
  token: null,
  refreshToken: null,
} as TUserState

export const courses = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCredentials: (state: TUserState, action: PayloadAction<TUserState>) => {
      state.user = action.payload.user
      state.token = action.payload.token
      state.refreshToken = action.payload.refreshToken
    },
    logOut: (state) => {
      state.user = null
      state.token = null
      state.refreshToken = null
    },
  },
})

export const { setCredentials, logOut } = courses.actions
export const userReduces = courses.reducer

export const selectCurrentUser = (state: RootState) => {
  const { name, lastName, id } = state.userReduces.user || {}
  return {
    name,
    lastName,
    id,
  }
}
export const selectToken = (state: RootState) => state.userReduces.token
