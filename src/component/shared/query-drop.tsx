'use client'

import { useFilterEvent } from "@/lib/hooks"
import { Button } from "../ui"

export const QueryDrop: React.FC = () => {
    const { clear } = useFilterEvent()

    return <Button onClick={() => clear()}>Сбросить фильтр</Button>
}
