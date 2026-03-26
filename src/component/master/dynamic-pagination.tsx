'use client'

import { useDynamicPagination } from "@/lib/hooks";
import { useDynamicPaginationType } from "@/lib/hooks/use-dynamic-pagination";
import { ReactNode } from "react";
import { Fragment } from "react/jsx-runtime";

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
            {!items.length && <p className="text-nowrap px-1">По параметрам ничего не найденно</p>}
        </>
    )
}
