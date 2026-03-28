'use client'

import { Button } from "@/component/ui"
import { QueryDrop } from "./button"
import { FilterEvent } from "./modal"
import { useUser } from "@/lib/hooks"
import { Role } from "@root/prisma/generated/prisma/enums"

export const GeneralTableUI: React.FC<{}> = () => {
    const user = useUser()


    return <div className='flex gap-3 items-center'>
        <QueryDrop />
        <FilterEvent />
        {user?.role != Role.STUDENT && <Button variant={'primary'}>Экспорт в Excel</Button>}
    </div>
}
