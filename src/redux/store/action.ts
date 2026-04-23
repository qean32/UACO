import { actionEnum } from "@/@types";
import { actionTypeEnum } from "@/@types/action.enum";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type stateActionType = {
    action: actionEnum | null
    payload: any
    type: actionTypeEnum | null

}
const initialState: stateActionType = {
    action: null,
    payload: null,
    type: null

}

export const actionSlice = createSlice({
    name: "action",
    initialState,
    reducers: {
        setAction: (state: stateActionType, { payload: { action, payload, type } }: PayloadAction<stateActionType>) => {
            state.action = action
            state.payload = payload
            state.type = type
        }
    },
})

export const actionReducer = actionSlice.reducer
export const { setAction } = actionSlice.actions
