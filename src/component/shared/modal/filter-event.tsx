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
import { DatePicker, Title } from "../../ui"
import { PickCourse, PickGroup, PickDepartment } from "@/component/shared/pick"

export function FilterEvent() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={'default'}>Фильтр</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle><Title>Фильтры</Title></DialogTitle>
                    <DialogDescription>Выберите курс, отделение, группу, или дату</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                    <PickCourse />
                    <PickDepartment />
                    <PickGroup />
                    <DatePicker />
                </div>
                <DialogFooter className="pt-8 justify-start">
                    <DialogClose asChild>
                        <Button variant="outline" className="text-dark">Отмена</Button>
                    </DialogClose>
                    <Button className="bg-green-600 hover:bg-green-700 cursor-pointer">Фильтр</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
