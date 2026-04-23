import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { User } from '@root/prisma/generated/prisma/browser'

export const supervisorApi = createApi({
    reducerPath: 'supervisorApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
    endpoints: (build) => ({
        getSupervisors: build.query<User[], string>({
            query: () => `supervisors`,
        }),
    }),
})

export const { useGetSupervisorsQuery } = supervisorApi