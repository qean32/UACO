'use client'

import { Button } from "@/src/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/src/components/ui/dialog"
import { Input } from "@/src/components/ui/input"
import { Title } from "../../ui"
import { SelectSupervisor, DatePicker } from "@/components/shared/select"

export function AddEvent() {
    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button asChild className='cursor-pointer bg-blue-600 hover:bg-blue-700 rounded-sm' size={'lg'}><p>Добавить Мероприятие</p></Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle><Title>Добавление мероприятия</Title></DialogTitle>
                        <DialogDescription>Введите название , выберите дату и организатора</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <Input placeholder="Название" className="h-[40px]" />
                        <DatePicker />
                        <SelectSupervisor />
                    </div>
                    <DialogFooter className="pt-8">
                        <DialogClose asChild>
                            <Button variant="outline" className="cursor-pointer">Отмена</Button>
                        </DialogClose>
                        <Button className="bg-green-600 hover:bg-green-700 cursor-pointer">Сохранить</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}
