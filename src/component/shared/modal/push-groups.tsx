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
import { useAction, useMyForm } from "@/lib/hooks"
import { formPushFile, TformPushFile } from "@/@types/schema"
import { FormProvider } from "react-hook-form"
import { handleAccess, handleCatch, readJson } from "@/lib/helpers"
import { guidePushGroups } from "@/config"
import { createGroupsAction } from "@/app/(root)/admin/actions"
import { DefaultFooter } from "./default-footer"
import { actionEnum } from "@/@types"
import { actionTypeEnum } from "@/@types/action.enum"

export function PushGroups() {
    const [setAction] = useAction()
    const { form, submitHandler } = useMyForm<TformPushFile>(
        formPushFile,
        async (data: TformPushFile) => {
            const file = data.file[0]
            const res = await readJson(file)

            if (res) {
                // @ts-ignore
                createGroupsAction(JSON.parse(res))
                    .then(res => {
                        handleAccess(res)
                        setAction({ action: actionEnum.push, payload: res.data, type: actionTypeEnum.group })
                    })
                    .catch(handleCatch)
            }
        })

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={'primary'}>Добавить группы</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-110">
                <FormProvider {...form}>
                    <form onSubmit={submitHandler}>
                        <DialogHeader className="pb-5">
                            <DialogTitle><Title>Добавить группы</Title></DialogTitle>
                            <DialogDescription>Для добавления новых групп в систему набходим файл формата &quot;.json&quot; с данными формата</DialogDescription>
                            <InsertCode className="max-w-94">{guidePushGroups}</InsertCode>
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
