'use server'

import { Role } from "@root/prisma/generated/prisma/enums"
import { StudentContentPage, SupervisorContentPage } from ".."
import { getRoleAction } from "@/app/(root)/profile/actions"

export const UserTable: React.FC<{ id: number }> = async ({ id }: { id: number }) => {
    const user = await getRoleAction(id)

    if (user?.role == Role.STUDENT) {
        return <StudentContentPage id={id} />
    }

    if (user?.role == Role.SUPERVISOR || user?.role == Role.ADMIN) {
        return <SupervisorContentPage />
    }
}
