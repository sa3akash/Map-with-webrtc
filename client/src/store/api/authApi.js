// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
const originalUrl = "http://localhost:5000" 
export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({ baseUrl: `${originalUrl}/api/v1/auth`,  }),
  tagTypes: ['Login', 'Register'],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url:"login",
        method: "POST",
        body: data,
        headers:{
            "content-type": "application/json"
        },
      }),
      invalidatesTags: ['Login'],
    }),
    register: builder.mutation({
      query: (data) => ({
        url:"register",
        method: "POST",
        body: data,
        headers:{
            "content-type": "application/json"
        }
      }),
      invalidatesTags: ['Register'],
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLoginMutation,useRegisterMutation } = authApi;