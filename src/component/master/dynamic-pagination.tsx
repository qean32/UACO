'use client'

import { useDynamicPagination } from "@/lib/hooks";
import { useDynamicPaginationType } from "@/lib/hooks/use-dynamic-pagination";

interface Props extends useDynamicPaginationType {
    RenderItem: React.FC<any>
}

export const DynamicPagination: React.FC<Props> = ({ _fetch, fillQueries, initialState, RenderItem, staticParam, initEnd }: Props) => {
    const { inViewRef, items } = useDynamicPagination<any>({ _fetch, fillQueries, initialState, staticParam, initEnd })

    return (
        <>
            <tbody className="min-h-[100vh]">
                {!!items.length && items.map(item => {
                    return <RenderItem {...item} key={item?.User?.id ? item?.User?.id : item.id} />
                })}
                <tr ref={inViewRef} className="h-[100px]"></tr>
            </tbody>
            {!items.length && <p className="text-nowrap px-1">По параметрам ничего не найденно</p>}
        </>
    )
}
