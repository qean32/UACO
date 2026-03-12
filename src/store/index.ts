import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { departmentApi } from './department'
import { groupApi } from './group'
import { supervisorApi } from './supervisor'
import { estimationApi } from './estimation'
import { bestApi } from './best'

export const store = configureStore({
    reducer: {
        [departmentApi.reducerPath]: departmentApi.reducer,
        [groupApi.reducerPath]: groupApi.reducer,
        [supervisorApi.reducerPath]: supervisorApi.reducer,
        [estimationApi.reducerPath]: estimationApi.reducer,
        [bestApi.reducerPath]: bestApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(departmentApi.middleware)
            .concat(groupApi.middleware)
            .concat(supervisorApi.middleware)
            .concat(bestApi.middleware)
            .concat(estimationApi.middleware),
})

setupListeners(store.dispatch)
