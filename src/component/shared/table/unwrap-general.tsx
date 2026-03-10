'use client'

import { generalTableItem } from "@/@types"
import { useOnInView } from "react-intersection-observer";
import { GeneralTableItem } from "./item";
import { useState } from "react";
import { getGeneralTable } from "@/app/actions";
import { useSearchParams } from "next/navigation";
import { useMountEvent } from "@/lib/hooks";

interface Props {
    initialState: generalTableItem[]
}

export const UnwrapGeneral: React.FC<Props> = ({ initialState }: Props) => {
    const [items, setItems] = useState<generalTableItem[]>(initialState)
    const [page, setPage] = useState(1)
    const queries = useSearchParams()

    useMountEvent(() => {
        setPage(1)
        getGeneralTable({ page: 0, ...Object.fromEntries(queries) })
            .then((res) => setItems(res.items))
    }, [queries])

    const inViewRef = useOnInView((inView) => {
        if (inView) {
            setPage(prev => ++prev)
            getGeneralTable({ page, ...Object.fromEntries(queries) })
                .then((res) => setItems(prev => [...prev, ...res.items]))
        }
    });

    return (
        <>
            <tbody>
                {items.map(item => {
                    return <GeneralTableItem {...item} key={item.User.id} />
                })}
                <tr ref={inViewRef} className="h-[100px]"></tr>
            </tbody>
        </>
    )
}
