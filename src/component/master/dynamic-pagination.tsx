'use client'

import { useDynamicPagination } from "@/lib/hooks";
import { useDynamicPaginationType } from "@/lib/hooks/use-dynamic-pagination";

interface Props extends useDynamicPaginationType {
    RenderItem: React.FC<any>
}

export const DynamicPagination: React.FC<Props> = ({ _fetch, fillQueries, initialState, RenderItem, staticParam }: Props) => {
    const { inViewRef, items } = useDynamicPagination({ _fetch, fillQueries, initialState, staticParam })

    return (
        <>
            <tbody>
                {!!items.length && items.map(item => {
                    // @ts-ignore
                    return <RenderItem {...item} key={item?.User?.id ? item?.User?.id : item.id} />
                })}
                <tr ref={inViewRef} className="h-[100px]"></tr>
            </tbody>
        </>
    )
}
