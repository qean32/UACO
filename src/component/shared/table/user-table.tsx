'use server'

import { getRole } from "@/app/actions"
import { Role } from "@root/prisma/generated/prisma/enums"
import { StudentTable } from "./student-table"
import { SupervisorTable } from "./supervisor-table"
import { PushEvent } from "../modal"
import { PickPeriod } from "../pick"

export const UserTable: React.FC<{ id: number }> = async ({ id }: { id: number }) => {
    const user = await getRole(id)

    if (user?.role == Role.STUDENT) {
        return (
            <div className="flex flex-col px-5 rounded-md w-3/4">
                <p className='text-lg font-medium'>Мероприятия</p>
                <div className='flex gap-4 py-4'>
                    <p className='font-medium'>Период</p>
                    <PickPeriod />
                </div>
                <StudentTable id={id} />
            </div>
        )
    }

    if (user?.role == Role.SUPERVISOR) {
        return (
            <div className="flex flex-col px-5 rounded-md w-3/4">
                <div className='pb-6 flex justify-between'>
                    <p className='text-lg font-medium'>Мероприятия</p>
                    <PushEvent />
                </div>
                <SupervisorTable />
            </div>
        )
    }

    if (user?.role == Role.ADMIN) {
        return (
            <div className="flex flex-col px-5 rounded-md w-3/4">
                <div className='pb-6 flex justify-between'>
                    <p className='text-lg font-medium'>Мероприятия</p>
                    <PushEvent />
                </div>
                <SupervisorTable />
            </div>
        )
    }
}
