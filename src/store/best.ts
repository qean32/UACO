import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Group, User } from '@root/prisma/generated/prisma/browser'

export const bestApi = createApi({
    reducerPath: 'bestApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
    endpoints: (build) => ({
        getBestSupervisors: build.query<User[], string>({
            query: () => `best/supervisors`,
        }),
        getBestGroups: build.query<Group[], string>({
            query: () => `best/groups`,
        }),
    }),
})

export const { useGetBestGroupsQuery, useGetBestSupervisorsQuery } = bestApi
