'use client'

import { Button } from "@/component/ui"
import { QueryDrop } from ".."
import { FilterEvent } from "../../modal"
import { useUser } from "@/lib/hooks"
import { Role } from "@root/prisma/generated/prisma/enums"
import { xlsxAction } from "@/app/actions"
import { useSearchParams } from "next/navigation"
import { openDownloadFile } from "@/lib/helpers"

export const GeneralTableUI: React.FC<{}> = () => {
    const user = useUser()
    const search = useSearchParams()

    return <div className='flex gap-3 items-center'>
        <QueryDrop />
        <FilterEvent />
        {user?.role != Role.STUDENT &&
            <Button variant={'primary'}
                onClick={() => xlsxAction(Object.fromEntries(search)).then(openDownloadFile)}>
                Экспорт в Excel
            </Button>
        }
    </div>
}
