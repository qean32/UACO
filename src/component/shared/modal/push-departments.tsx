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
import { InputFile, InsertCode, Title } from "@/component/ui"
import { useMyForm } from "@/lib/hooks"
import { formPushFile, TformPushFile } from "@/@types/schema"
import { FormProvider } from "react-hook-form"
import { handleAccess, handleCatch, readJson } from "@/lib/helpers"
import { guidePushDepartments } from "@/config"
import { createStudentsAction } from "@/app/(root)/admin/actions"

export function PushDepartments() {
    const { form, submitHandler } = useMyForm<TformPushFile>(
        formPushFile,
        async (data: TformPushFile) => {
            const file = data.file[0]

            const res = await readJson(file)

            if (res) {
                // @ts-ignore
                createStudentsAction(JSON.parse(res))
                    .then(res => handleAccess(res, { title: "Студенты добавлены!", description: "Вы успешно добавили студентов" }))
                    .catch(handleCatch)
            }
        })

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={'primary'}>Добавить отделение</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <FormProvider {...form}>
                    <form onSubmit={submitHandler}>
                        <DialogHeader className="pb-5">
                            <DialogTitle><Title>Добавить отделение</Title></DialogTitle>
                            <DialogDescription>Для добавления новых отделений в систему набходим файл формата &quot;.json&quot; с данными формата</DialogDescription>
                            <InsertCode className="max-w-[375px]">{guidePushDepartments}</InsertCode>
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
