import { actionEnum } from "@/@types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type stateActionType = {
    action: actionEnum | null
    payload: any
}
const initialState: stateActionType = {
    action: null,
    payload: null
}

export const actionSlice = createSlice({
    name: "action",
    initialState,
    reducers: {
        setAction: (state: stateActionType, { payload: { action, payload } }: PayloadAction<stateActionType>) => {
            state.action = action
            state.payload = payload
        }
    },
})

export const actionReducer = actionSlice.reducer
export const { setAction } = actionSlice.actions
