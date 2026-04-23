'use server'

import { Suspense } from "react"
import { SupervisorTable } from "./table"
import { getSupervisorTableAction } from "@/app/(root)/admin/actions"
import { SupervisorTableUI } from "./button/pack"

export const SupervisorContentPage: React.FC<{}> = async ({ }: {}) => {
    const data = await getSupervisorTableAction({ page: 0 })

    return (
        <Suspense>
            <div className="flex flex-col rounded-md w-full">
                <SupervisorTableUI />
                <SupervisorTable {...data} />
            </div>
        </Suspense>
    )
}
