'use client'

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
import { Input } from "@/component/ui/input"
import { Title } from "../../ui"
import { PickSupervisor, DatePicker } from "@/component/shared/pick"

export function PushEvent() {
    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button variant={'primary'}>Добавить мероприятие</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle><Title>Добавить мероприятие</Title></DialogTitle>
                        <DialogDescription>Введите название, дату и организатора</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <Input placeholder="Название" className="h-[40px]" />
                        <DatePicker />
                        <PickSupervisor />
                    </div>
                    <DialogFooter className="pt-8">
                        <DialogClose asChild>
                            <Button variant="outline" className="text-dark">Отмена</Button>
                        </DialogClose>
                        <Button className="bg-green-600 hover:bg-green-700 cursor-pointer">Сохранить</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}
