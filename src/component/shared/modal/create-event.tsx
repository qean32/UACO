'use client'

import { Button } from "@/component/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/component/ui/dialog"
import { FormInput, Title } from "../../ui"
import { PickSupervisor, DatePicker } from "@/component/shared/pick"
import { useAction, useMyForm } from "@/lib/hooks"
import { formCreateEvent, TformCreateEvent } from "@/@types/schema"
import { FormProvider } from "react-hook-form"
import { formatDate, handleAccess, handleCatch } from "@/lib/helpers"
import { createEventAction } from "@/app/(root)/admin/actions"
import { DefaultFooter } from "./default-footer"
import { actionEnum } from "@/@types"
import { actionTypeEnum } from "@/@types/action.enum"

export function CreateEvent() {
    const [setAction] = useAction()
    const { form, setValue, submitHandler } = useMyForm<TformCreateEvent>(
        formCreateEvent,
        (data: TformCreateEvent) => {
            // @ts-ignore
            createEventAction(data)
                .then(res => {
                    handleAccess(res, { title: "Мероприятие добавлено!", description: "Вы добавили мероприятие" });
                    setAction({ action: actionEnum.push, payload: { ...res, date: formatDate(res?.date) }, type: actionTypeEnum.event })
                })
                .catch(handleCatch)
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
                            <FormInput placeholder="Название" className="h-10" name="name" />
                            <DatePicker setValue={setValue} />
                            <PickSupervisor setValue={setValue} />
                        </div>
                        <DefaultFooter>
                            <Button variant="outline" className="text-dark">Отмена</Button>
                            <Button type="submit" variant={'primary'}>Добавить</Button>
                        </DefaultFooter>
                    </form>
                </FormProvider>
            </DialogContent>
        </Dialog>
    )
}
