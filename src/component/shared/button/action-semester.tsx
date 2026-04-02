'use client'

import { Button } from "@/component/ui"
import { AccessAction } from "../modal"
import { semesterMoveAction } from "@/app/(root)/admin/actions"
import { handleAccess, handleCatch } from "@/lib/helpers"

interface Props {
    action: -1 | 1
    alert: string
    description: string
    children: string
}

export const ActionSemester: React.FC<Props> = ({ action, alert, description, children }: Props) => {
    const move = () => {
        semesterMoveAction(action)
            .then(handleAccess)
            .catch(handleCatch)
    }

    return <AccessAction
        action={move}
        alert={alert}
        description={description}
    >
        <Button>{children}</Button>
    </AccessAction>
}
