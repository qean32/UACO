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
import { FormInput, Title } from "@/component/ui"
import { useMyForm } from "@/lib/hooks"
import { formUpdateGroup, TformUpdateGroup } from "@/@types/schema"
import { FormProvider } from "react-hook-form"
import { DefaultFooter } from "./default-footer"
import { axiosInstance } from "@/redux/api"
import { updateGroupAction } from "@/app/(root)/admin/actions"
import { handleAccess, handleCatch } from "@/lib/helpers"

export function UpdateGroup({ code }: { code: string }) {

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={'primary'}>Изменить группу</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-110">
                <Form code={code} />
            </DialogContent>
        </Dialog>
    )
}

const Form = ({ code }: { code: string }) => {
    const { form, submitHandler } = useMyForm<TformUpdateGroup>(
        formUpdateGroup,
        async (data: TformUpdateGroup) => {
            // @ts-ignore
            updateGroupAction(data)
                .then(res => handleAccess(res, {}))
                .catch(handleCatch)
        },
        () => { },
        async () => {
            const data = (await axiosInstance.get(`groups/${code}`)).data
            return { ...data, primaryCode: data.code }
        }
    )

    return <FormProvider {...form}>
        <form onSubmit={submitHandler}>
            <DialogHeader className="pb-5">
                <DialogTitle><Title>Изменить группу {code}</Title></DialogTitle>
                <DialogDescription>Изменение группы {code}</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
                <FormInput placeholder="Код" className="h-10" name="code" />
                <FormInput hidden name="primaryCode" />
                <FormInput placeholder="Отделение" className="h-10" name="DepartmentCode" />
                <FormInput placeholder="Семестр" className="h-10" name="semester" />
            </div>
            <DefaultFooter>
                <Button variant="outline" className="text-dark">Отмена</Button>
                <Button type="submit" variant={'primary'}>Добавить</Button>
            </DefaultFooter>
        </form>
    </FormProvider>
}
