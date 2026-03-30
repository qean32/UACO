import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { departmentApi } from './api/department'
import { groupApi } from './api/group'
import { supervisorApi } from './api/supervisor'
import { estimationApi } from './api/estimation'
import { bestApi } from './api/best'
import { actionReducer } from './store/action'
import { useDispatch } from 'react-redux'

const rootReducer = combineReducers({
    [departmentApi.reducerPath]: departmentApi.reducer,
    action: actionReducer,
    [groupApi.reducerPath]: groupApi.reducer,
    [supervisorApi.reducerPath]: supervisorApi.reducer,
    [estimationApi.reducerPath]: estimationApi.reducer,
    [bestApi.reducerPath]: bestApi.reducer,
})
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(departmentApi.middleware)
            .concat(groupApi.middleware)
            .concat(supervisorApi.middleware)
            .concat(bestApi.middleware)
            .concat(estimationApi.middleware),
})

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
