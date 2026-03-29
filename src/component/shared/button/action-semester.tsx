'use client'

import { Button } from "@/component/ui"
import { AccessAction } from "../modal"
import { semesterMoveAction } from "@/app/(root)/admin/actions"

interface Props {
    action: -1 | 1
    alert: string
    description: string
    children: string
}

export const ActionSemester: React.FC<Props> = ({ action, alert, description, children }: Props) => {

    return <AccessAction
        action={async () => { }}
        alert={alert}
        description={description}
    >
        <Button>{children}</Button>
    </AccessAction>
}
