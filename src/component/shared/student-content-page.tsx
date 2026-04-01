'use server'

import { getStudentTableAction } from "@/app/(root)/profile/actions"
import { PickPeriod } from "./pick"
import { StudentTable } from "./table"

export const StudentContentPage: React.FC<{ id: number }> = async ({ id }: { id: number }) => {
    const data = await getStudentTableAction({ userId: id, page: 0 })

    return (
        <div className="flex flex-col rounded-md w-full">
            <div className='flex gap-4 py-4'>
                <p className='font-medium'>Период</p>
                <PickPeriod />
            </div>
            <StudentTable id={id} {...data} />
        </div>
    )
}
