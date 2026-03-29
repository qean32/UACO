'use server'

import { Suspense } from "react"
import { QueryDrop } from "./button/query-drop"
import { CreateEvent } from "./modal"
import { SupervisorTable } from "./table"
import { PickPeriod } from "./pick"
import { getSupervisorTableAction } from "@/app/(root)/admin/actions"
import { SupervisorTableUI } from "./button/pack"

export const SupervisorContentPage: React.FC<{}> = async ({ }: {}) => {
    const data = await getSupervisorTableAction({ page: 0 })

    return (
        <Suspense>
            <div className="flex flex-col px-5 rounded-md w-full ml-5">
                <SupervisorTableUI />
                <SupervisorTable {...data} />
            </div>
        </Suspense>
    )
}
