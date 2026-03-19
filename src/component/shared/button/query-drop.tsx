'use client'

import { usePushQuery } from "@/lib/hooks"
import { Button } from "@/component/ui"
import { toast } from "sonner"
import { toastConfig } from "@/config"

export const QueryDrop: React.FC = () => {
    const { clear } = usePushQuery()

    return <Button onClick={() => {
        clear();
        toast("Фильтрация и сортировка сброшена!", {
            description: "Вы сбросили query",
            ...toastConfig
        })
    }}>Сбросить фильтр</Button>
}
