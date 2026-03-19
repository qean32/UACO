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
import { FormInput, InputFile, InsertCode, Title } from "@/component/ui"
import { PickSupervisor, DatePicker } from "@/component/shared/pick"
import { useMyForm } from "@/lib/hooks"
import { formCreateEvent, TformCreateEvent } from "@/@types/schema"
import { FormProvider } from "react-hook-form"
import { handleAccess, handleCatch } from "@/lib/helpers"
import { guidePushStudents } from "@/config"

export function PushStudents() {
    const { form, setValue, submitHandler } = useMyForm<TformCreateEvent>(
        formCreateEvent,
        (data: TformCreateEvent) => { })

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={'primary'}>Добавить студентов</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <FormProvider {...form}>
                    <form onSubmit={submitHandler}>
                        <DialogHeader className="pb-5">
                            <DialogTitle><Title>Добавить студентов</Title></DialogTitle>
                            <DialogDescription>Для добавления новых студентов в систему набходим файл формата ".json" с данными формата</DialogDescription>
                            <InsertCode className="max-w-[375px]">{guidePushStudents}</InsertCode>
                        </DialogHeader>
                        <div className="grid gap-4">
                            <InputFile />
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
