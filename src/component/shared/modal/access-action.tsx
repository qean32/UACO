'use client'

import { Title } from "@/component/ui"
import { Button } from "@/component/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/component/ui/dialog"
import { ReactNode } from "react"

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
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader className="pb-5">
                    <DialogTitle><Title size="text-xl">Подтвердите действие: {alert}</Title></DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                </div>
                <DialogFooter className="pt-8">
                    <DialogClose asChild>
                        <Button type="submit" onClick={action} variant={'danger'}>Подтвердить</Button>
                    </DialogClose>
                    <DialogClose asChild>
                        <Button variant="outline" className="text-dark">Отмена</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
