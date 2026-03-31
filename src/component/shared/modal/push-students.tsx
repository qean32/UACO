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
import { InputFile, InsertCode, Title } from "@/component/ui"
import { useMyForm } from "@/lib/hooks"
import { formPushFile, TformPushFile } from "@/@types/schema"
import { FormProvider } from "react-hook-form"
import { handleAccess, handleCatch, openDownloadFile, readJson } from "@/lib/helpers"
import { guidePushStudents } from "@/config"
import { createStudentsAction } from "@/app/(root)/admin/actions"
import { DefaultFooter } from "./default-footer"

export function PushStudents() {
    const { form, submitHandler } = useMyForm<TformPushFile>(
        formPushFile,
        async (data: TformPushFile) => {
            const file = data.file[0]
            const res = await readJson(file)

            if (res) {
                // @ts-ignore
                createStudentsAction(JSON.parse(res))
                    .then(res => {
                        handleAccess(res, { title: "Студенты добавлены!", description: "Вы успешно добавили студентов" })
                        openDownloadFile(res)
                    })
                    .catch(handleCatch)
            }
        })

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={'primary'}>Добавить студентов</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-110">
                <FormProvider {...form}>
                    <form onSubmit={submitHandler}>
                        <DialogHeader className="pb-5">
                            <DialogTitle><Title>Добавить студентов</Title></DialogTitle>
                            <DialogDescription>Для добавления новых студентов в систему набходим файл формата &quot;.json&quot; с данными формата</DialogDescription>
                            <InsertCode className="max-w-94">{guidePushStudents}</InsertCode>
                        </DialogHeader>
                        <div className="grid gap-4">
                            <InputFile />
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
