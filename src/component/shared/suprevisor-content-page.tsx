'use server'

import { Suspense } from "react"
import { QueryDrop } from "./button/query-drop"
import { CreateEvent } from "./modal"
import { SupervisorTable } from "./table"
import { PickPeriod } from "./pick"
import { getSupervisorTableAction } from "@/app/(root)/admin/actions"

export const SupervisorContentPage: React.FC<{}> = async ({ }: {}) => {
    const data = await getSupervisorTableAction({ page: 0 })

    return (
        <Suspense>
            <div className="flex flex-col px-5 rounded-md w-full ml-5">
                <div className='pb-6 flex justify-between'>
                    <div className="flex gap-2">
                        <PickPeriod />
                        <QueryDrop />
                        <CreateEvent />
                    </div>
                </div>
                <SupervisorTable {...data} />
            </div>
        </Suspense>
    )
}
