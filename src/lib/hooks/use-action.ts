import { actionEnum } from "@/@types"
import { useAppDispatch, useAppSelector } from "./redux"
import { setAction, stateActionType } from "@/redux/store/action"

export const useAction = (): [stateActionType, (payload: { action: actionEnum, payload: any }) => void] => {
    const { action, payload } = useAppSelector(state => state.action)
    const dispath = useAppDispatch()

    const set = (payload: { action: actionEnum, payload: any }) => {
        dispath(setAction(payload))
    }

    return [{ action, payload }, set]
}
