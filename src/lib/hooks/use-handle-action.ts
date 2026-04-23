'use client'

import { actionEnum } from "@/@types"
import { useAction } from "./use-action"
import { useEffect } from "react"
import { actionTypeEnum } from "@/@types/action.enum"

type view = (payload: any) => void

export const useHandleAction = (config: {
    typeAction: actionTypeEnum
    edit?: view | null,
    delete?: view | null,
    push?: view | null,
}) => {
    const [_, { action, payload, type }, clear] = useAction()

    const isEdit = config?.edit ? action == actionEnum.edit && type == config.typeAction : null
    const isDelete = config?.delete ? action == actionEnum.delete && type == config.typeAction : null
    const isPush = config?.push ? action == actionEnum.push && type == config.typeAction : null

    useEffect(() => {
        if (config?.edit && isEdit) {
            config?.edit(payload)
            clear()
        }
    }, [isEdit])
    useEffect(() => {
        if (config?.delete && isDelete) {
            config?.delete(payload)
            clear()
        }
    }, [isDelete])
    useEffect(() => {
        if (config?.push && isPush) {
            config?.push(payload)
            clear()
        }
    }, [isPush])
}
