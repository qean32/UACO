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
import { PickSupervisor, DatePicker } from "@/component/shared/pick"
import { useMyForm } from "@/lib/hooks"
import { formCreateEvent, TformCreateEvent } from "@/@types/schema"
import { FormProvider } from "react-hook-form"
import { handleAccess, handleCatch } from "@/lib/helpers"
import { createEventAction } from "@/app/(root)/admin/actions"

export function CreateEvent() {
    const { form, setValue, submitHandler } = useMyForm<TformCreateEvent>(
        formCreateEvent,
        (data: TformCreateEvent) => {
            // @ts-ignore
            createEventAction(data)
                .then(res => handleAccess(res, { title: "Мероприятие добавлено!", description: "Вы добавили мероприятие" }))
                .catch(handleCatch)
        })

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={'primary'}>Добавить мероприятие</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <FormProvider {...form}>
                    <form onSubmit={submitHandler}>
                        <DialogHeader className="pb-5">
                            <DialogTitle><Title>Добавить мероприятие</Title></DialogTitle>
                            <DialogDescription>Введите название, дату и организатора</DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4">
                            <FormInput placeholder="Название" className="h-[40px]" name="name" />
                            <DatePicker setValue={setValue} />
                            <PickSupervisor setValue={setValue} />
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
