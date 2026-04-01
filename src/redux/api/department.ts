import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Department } from '@root/prisma/generated/prisma/browser'

export const departmentApi = createApi({
    reducerPath: 'departmentApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
    endpoints: (build) => ({
        getDepartments: build.query<Department[], string>({
            query: () => `departments`,
        }),
    }),
})

export const { useGetDepartmentsQuery } = departmentApi