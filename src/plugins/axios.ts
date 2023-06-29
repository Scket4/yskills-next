// Set config defaults when creating the instance
'use client'
import axios from 'axios'
import { AxiosInstance } from 'axios'

let instance: AxiosInstance = {} as AxiosInstance

export const setUpAxios = () => {
  instance = axios.create({
    baseURL: 'http://localhost:3500/',
  })

  // Alter defaults after instance has been created
  // instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;

  // Add a request interceptor
  instance.interceptors.request.use(
    (config) => {
      // Do something before request is sent
      return config
    },
    (error) => {
      // Do something with request error
      return Promise.reject(error)
    }
  )

  // Add a response interceptor
  instance.interceptors.response.use(
    (response) => {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response
    },
    (error) => {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error)
    }
  )
}

export { instance }
