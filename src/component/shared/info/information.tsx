'use server'

import { Role } from "@root/prisma/generated/prisma/enums"
import { Student } from "./student"
import { Supervisor } from "./supervisor"
import { getUserInfoAction } from "@/app/(root)/profile/actions"

export const Information: React.FC<{ id: number }> = async ({ id }: { id: number }) => {
    const user = await getUserInfoAction(id)

    if (user?.role == Role.STUDENT) {
        return <Student {...user} />
    }

    if (user?.role == Role.SUPERVISOR || user?.role == Role.ADMIN) {
        return <Supervisor {...user} />
    }
}
