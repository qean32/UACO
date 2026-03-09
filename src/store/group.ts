import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Group } from '@root/prisma/generated/prisma/browser'

export const groupApi = createApi({
    reducerPath: 'groupApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
    endpoints: (build) => ({
        getGroups: build.query<Group[], string>({
            query: () => `groups`,
        }),
    }),
})

export const { useGetGroupsQuery } = groupApi