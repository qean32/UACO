import { useAppDispatch, useAppSelector } from "./redux"
import { setAction, stateActionType } from "@/redux/store/action"

export const useAction = (): [(payload: stateActionType) => void, stateActionType, () => void] => {
    const state = useAppSelector(state => state.action)
    const dispath = useAppDispatch()

    const set = (payload: stateActionType) => {
        dispath(setAction(payload))
    }

    const clear = () => {
        dispath(setAction({ action: null, payload: null, type: null }))
    }

    return [set, state, clear]
}
