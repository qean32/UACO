'use client'

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { useOnInView } from "react-intersection-observer"
import { useMountEvent } from "./use-mount-event"
import { tableResponse } from "@/@types"
import { useBoolean } from "./use-boolean"
import { toast } from "sonner"
import { toastConfig } from "@/config"
import { useHandleAction } from "./use-handle-action"
import { number } from "zod"
import { actionTypeEnum } from "@/@types/action.enum"

export type useDynamicPaginationType = {
    fillQueries?: boolean
    initialState: any[]
    _fetch: Function
    staticParam?: any
    initEnd: boolean
    typeAction?: actionTypeEnum
}

export const useDynamicPagination = <T extends { id: string, code: string },>(
    {
        fillQueries = false,
        initialState,
        _fetch,
        staticParam,
        initEnd,
        typeAction
    }:
        useDynamicPaginationType
) => {
    const [items, setItems] = useState<T[]>(initialState)
    const queries = useSearchParams()
    const [page, setPage] = useState(1)
    const [end, _, on, off] = useBoolean(initEnd)
    const clearItems = items.length == 0 && queries.size
    useEffect(() => {
        if (clearItems) toast("По параметрам ничего не найдено!", toastConfig)
    }, [clearItems])
    !!typeAction?.toString() && useHandleAction({
        typeAction,
        delete: payload => setItems(curr => curr.filter(item => item?.id != payload?.id || item?.code != payload?.code)),
        push: payload => setItems(curr => [payload, ...curr])
    })

    if (fillQueries) {
        useMountEvent(() => {
            setPage(1)
            _fetch({ page: 0, ...Object.fromEntries(queries), ...staticParam })
                .then((res: tableResponse<T[]>) => {
                    setItems(res.items)
                    off()
                })
        }, [queries])
    }

    const inViewRef = useOnInView((inView) => {
        if (inView && !end) {
            setPage(prev => ++prev)
            _fetch({ page, ...Object.fromEntries(queries), ...staticParam })
                .then((res: tableResponse<T[]>) => {
                    setItems(prev => [...prev, ...res.items])
                    if (res.end) on()
                })
        }
    })

    return { inViewRef, items }
}
