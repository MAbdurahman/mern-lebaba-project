import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {getBaseURL} from '../../../utils/baseURLUtils.js';


const userAPI = createApi({
   reducerPath: 'userAPI',
   baseQuery: fetchBaseQuery({
      baseUrl: `${getBaseURL()}/api/v1.0/users`,
      credentials: 'include',
   }),
   endpoints: (builder) => ({
      signUpUser: builder.mutation({
         query: (newUser) => ({
            url: '/sign-up',
            method: 'POST',
            body: newUser
         })
      }),
      signInUser: builder.mutation({
         query: (credentials) => ({
            url: '/sign-in',
            method: 'POST',
            body: credentials
         })
      }),
      signOutUser: builder.mutation({
         query: () => ({
            url: '/sign-out',
            method: 'POST'

         })
      })

   })
});

export const {
   useSignInUserMutation, useSignOutUserMutation, useSignUpUserMutation,
} = userAPI;
export default userAPI;