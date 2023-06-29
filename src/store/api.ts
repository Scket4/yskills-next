import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials, logOut } from '@/src/store/modules/user'

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:3000',
  credentials: 'include',
  prepareHeaders: (headers, { getState }: any) => {
    const token = getState().userReduces.token
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }
    return headers
  },
})

const basequeryWithReauth = async (args: any, api: any, extraOptions: any) => {
  let result = await baseQuery(args, api, extraOptions)

  if (result.error?.status === 403) {
    const refreshResult = await baseQuery('/refresh', api, extraOptions)
    if (refreshResult?.data) {
      const user = api.getState().user.user
      api.dispatch(setCredentials({ ...user, ...refreshResult.data }))
      result = await baseQuery(args, api, extraOptions)
    } else {
      api.dispatch(logOut())
    }
  }
  return result
}

export const apiSlice = createApi({
  baseQuery: basequeryWithReauth,
  endpoints: (builder) => ({}),
})
