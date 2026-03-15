'use client'

import { useSearchParams } from "next/navigation"
import { useState } from "react"
import { useOnInView } from "react-intersection-observer"
import { useMountEvent } from "./use-mount-event"
import { tableResponse } from "@/@types"
import { useBoolean } from "./use-boolean"

export type useDynamicPaginationType = {
    fillQueries?: boolean
    initialState: any[]
    _fetch: Function
    staticParam?: any
    initEnd: boolean
}

export const useDynamicPagination = <T,>(
    {
        fillQueries = false,
        initialState,
        _fetch,
        staticParam,
        initEnd,
    }:
        useDynamicPaginationType
) => {
    const [items, setItems] = useState<T[]>(initialState)
    const queries = useSearchParams()
    const [page, setPage] = useState(1)
    const [end, _, on, off] = useBoolean(initEnd)

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
