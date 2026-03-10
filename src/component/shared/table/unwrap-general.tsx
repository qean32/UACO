'use client'

import { generalTableItem } from "@/@types"
import { useOnInView } from "react-intersection-observer";
import { GeneralTableItem } from "./item";
import { useState } from "react";
import { getGeneralTable } from "@/app/actions";

interface Props {
    inicialState: generalTableItem[]
}

export const UnwrapGeneral: React.FC<Props> = ({ inicialState }: Props) => {
    const [items, setItems] = useState<generalTableItem[]>(inicialState)
    const [page, setPage] = useState(1)

    const inViewRef = useOnInView((inView) => {
        if (inView) {
            setPage(prev => ++prev)
            getGeneralTable({ page })
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
