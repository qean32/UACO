'use client'

import { actionEnum } from "@/@types"
import { useAction } from "./use-action"
import { useEffect } from "react"

type view = (payload: any) => void

export const useHandleAction = (config: {
    edit?: view | null,
    delete?: view | null,
    push?: view | null,
}) => {
    const [data] = useAction()

    const isEdit = config?.edit ? data.action == actionEnum.edit : null
    const isDelete = config?.delete ? data.action == actionEnum.delete : null
    const isPush = config?.push ? data.action == actionEnum.push : null

    useEffect(() => {
        if (config?.edit && isEdit)
            config?.edit(data.payload)
    }, [isEdit])
    useEffect(() => {
        if (config?.delete && isDelete)
            config?.delete(data.payload)
    }, [isDelete])
    useEffect(() => {
        if (config?.push && isPush)
            config?.push(data.payload)
    }, [isPush])
}
