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
import { createEventAction } from "@/app/actions"

export function CreateEvent() {
    const { form, setValue, submitHandler } = useMyForm<TformCreateEvent>(
        formCreateEvent,
        (data: TformCreateEvent) => {
            console.log(data)
            // @ts-ignore
            createEventAction(data)
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
                            <Button type="submit" variant={'primary'}>Сохранить</Button>
                        </DialogFooter>
                    </form>
                </FormProvider>
            </DialogContent>
        </Dialog>
    )
}
