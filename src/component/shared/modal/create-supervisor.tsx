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
import { useMyForm } from "@/lib/hooks"
import { formCreateSupervisor, TformCreateSupervisor } from "@/@types/schema"
import { FormProvider } from "react-hook-form"
import { DefaultFooter } from "./default-footer"
import { createSupervisorAction } from "@/app/(root)/admin/actions"
import { handleAccess, handleCatch, openDownloadFile } from "@/lib/helpers"

export function CreateSupervisor() {
    const { form, submitHandler } = useMyForm<TformCreateSupervisor>(
        formCreateSupervisor,
        (data: TformCreateSupervisor) => {
            // @ts-ignore
            createSupervisorAction(data)
                .then(res => { handleAccess(res, {}); openDownloadFile(res) })
                .catch(handleCatch)
        })

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={'primary'}>Добавить организатора</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-110">
                <FormProvider {...form}>
                    <form onSubmit={submitHandler}>
                        <DialogHeader className="pb-5">
                            <DialogTitle><Title>Добавить организатора</Title></DialogTitle>
                            <DialogDescription>Введите ФИО и дату рождения</DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4">
                            <FormInput placeholder="Фамилия" className="h-10" name="firstName" />
                            <FormInput placeholder="Имя" className="h-10" name="lastName" />
                            <FormInput placeholder="Отчество" className="h-10" name="sureName" />
                            <FormInput placeholder="Пол: М | Ж" className="h-10" name="sex" />
                            <FormInput placeholder="Дата рождения: 20.05.2006" className="h-10" name="dateOfBirth" />
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
