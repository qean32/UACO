'use client'


import { useEffect, useState } from "react"
import { useHandleAction } from "./use-handle-action"
import { actionTypeEnum } from "@/@types/action.enum"

export const useEditableRequest = <T extends { id: string, code: string }>({
    _fetch, key, type
}: {
    _fetch: any,
    key: string,
    type: actionTypeEnum
}): [T[], boolean] => {
    const { data, isLoading } = _fetch(key)
    const [items, setItems] = useState<T[]>(data)

    useEffect(() => {
        if (data) {
            setItems(data)
        }
    }, [data])

    useHandleAction({
        typeAction: type,
        delete: payload => setItems(curr => curr.filter(item => { console.log(item?.id ? item?.id != payload?.id : item?.code != payload?.code); item?.id ? item?.id != payload?.id : item?.code != payload?.code })),
        push: payload => setItems(curr => [...payload, ...curr]),
        edit: payload => setItems(curr => {
            const index = curr.findIndex(item => item?.id == payload?.id || item?.code == payload?.code)
            return [...curr.slice(index + 1, curr.length).reverse(), payload, ...curr.slice(0, index)].reverse()
        })
    })

    return [items, isLoading]
}
