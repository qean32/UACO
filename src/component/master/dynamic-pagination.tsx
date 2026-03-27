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
            <tbody className="min-h-screen">
                {!!items.length && items.map(item => {
                    return <Fragment key={item?.User?.id ? item?.User?.id : item.id}>{renderItem(item)}</Fragment>
                })}
                <tr ref={inViewRef} className="h-screen"></tr>
            </tbody>
        </>
    )
}
