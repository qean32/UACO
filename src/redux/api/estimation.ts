import { estimationEventActionType } from '@/@types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const estimationApi = createApi({
    reducerPath: 'estimationApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
    endpoints: (build) => ({
        postEstimation: build.mutation<estimationEventActionType, string>({
            query: (body) => ({
                url: `estimation`,
                method: "POST",
                body: body
            }),
        }),
    }),
})

export const { usePostEstimationMutation } = estimationApi
