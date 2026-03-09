'use server'

import { getUserInfo } from "@/app/actions"
import { Role } from "@root/prisma/generated/prisma/enums"
import { Student } from "./student"
import { Supervisor } from "./supervisor"

export const Information: React.FC<{ id: number }> = async ({ id }: { id: number }) => {
    const user = await getUserInfo(id)

    if (user?.role == Role.STUDENT) {
        return <Student {...user} />
    }

    if (user?.role == Role.SUPERVISOR) {
        return <Supervisor {...user} />
    }

    if (user?.role == Role.ADMIN) {
        return <Supervisor {...user} />
    }
}