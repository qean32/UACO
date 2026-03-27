'use client'

import { useDynamicPagination } from "@/lib/hooks";
import { useDynamicPaginationType } from "@/lib/hooks/use-dynamic-pagination";
import { ReactNode } from "react";
import { Fragment } from "react/jsx-runtime";
import { Portal } from "./portal";

interface Props extends useDynamicPaginationType {
    renderItem: (item: any) => ReactNode
}

export const DynamicPagination: React.FC<Props> = ({ _fetch, fillQueries, initialState, renderItem, staticParam, initEnd }: Props) => {
    const { inViewRef, items } = useDynamicPagination<any>({ _fetch, fillQueries, initialState, staticParam, initEnd })

    return (
        <>
            <tbody className="min-h-[100vh]">
                {!!items.length && items.map(item => {
                    return <Fragment key={item?.User?.id ? item?.User?.id : item.id}>{renderItem(item)}</Fragment>
                })}
                <tr ref={inViewRef} className="h-[100px]"></tr>
            </tbody>
            {/* <Portal>{!items.length && <p className="fixed top-5 left-1/2 -translate-x-1/2 bg-gray-100 p-3 px-5 rounded-sm">По заданным параметрам ничего не найденно</p>}</Portal> */}
        </>
    )
}
