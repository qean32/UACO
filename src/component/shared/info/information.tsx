'use server'

import { Role } from "@root/prisma/generated/prisma/enums"
import { Student } from "./student"
import { Supervisor } from "./supervisor"
import { getUserInfo } from "@/app/actions"

export const Information: React.FC<{ id: number }> = async ({ id }: { id: number }) => {
    const user = await getUserInfo(id)

    if (user?.role == Role.STUDENT) {
        return <Student {...user} />
    }

    if (user?.role == Role.SUPERVISOR || user?.role == Role.ADMIN) {
        return <Supervisor {...user} />
    }
}
