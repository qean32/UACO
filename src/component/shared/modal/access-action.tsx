'use client'

import { Title } from "@/component/ui"
import { Button } from "@/component/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/component/ui/dialog"
import { ReactNode } from "react"
import { DefaultFooter } from "."

export function AccessAction({ action, alert, description, children }
    :
    {
        alert: string,
        description: string
        action: (...args: any) => void
        children: ReactNode
    }
) {

    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-125">
                <DialogHeader className="pb-5">
                    <DialogTitle><Title size="text-xl">Подтвердите действие: {alert}</Title></DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                </div>
                <DefaultFooter>
                    <Button type="submit" onClick={action} variant={'danger'}>Подтвердить</Button>
                    <Button variant="outline" className="text-dark">Отмена</Button>
                </DefaultFooter>
            </DialogContent>
        </Dialog>
    )
}
