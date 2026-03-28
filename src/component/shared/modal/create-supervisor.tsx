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
import { FormInput, Title } from "../../ui"
import { DatePicker } from "@/component/shared/pick"
import { useMyForm } from "@/lib/hooks"
import { formCreateSupervisor, TformCreateSupervisor } from "@/@types/schema"
import { FormProvider } from "react-hook-form"

export function CreateSupervisor() {
    const { form, setValue, submitHandler } = useMyForm<TformCreateSupervisor>(
        formCreateSupervisor,
        (data: TformCreateSupervisor) => {
        })

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={'primary'}>Добавить мероприятие</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-110">
                <FormProvider {...form}>
                    <form onSubmit={submitHandler}>
                        <DialogHeader className="pb-5">
                            <DialogTitle><Title>Добавить мероприятие</Title></DialogTitle>
                            <DialogDescription>Введите название, дату и организатора</DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4">
                            <FormInput placeholder="Фамилия" className="h-10" name="name" />
                            <FormInput placeholder="Име" className="h-10" name="name" />
                            <FormInput placeholder="Отчество" className="h-10" name="name" />
                            <DatePicker setValue={setValue} />
                        </div>
                        <DialogFooter className="pt-8">
                            <DialogClose asChild>
                                <Button variant="outline" className="text-dark">Отмена</Button>
                            </DialogClose>
                            <DialogClose asChild>
                                <Button type="submit" variant={'primary'}>Добавить</Button>
                            </DialogClose>
                        </DialogFooter>
                    </form>
                </FormProvider>
            </DialogContent>
        </Dialog>
    )
}
