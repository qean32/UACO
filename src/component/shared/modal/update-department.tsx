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
import { formUpdateDepartment, TformUpdateDepartment } from "@/@types/schema"
import { FormProvider } from "react-hook-form"
import { DefaultFooter } from "./default-footer"
import { axiosInstance } from "@/service"
import { updateDepartmentAction, updateGroupAction } from "@/app/(root)/admin/actions"
import { handleAccess, handleCatch } from "@/lib/helpers"

export function UpdateDepartment({ code }: { code: string }) {

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={'primary'}>Изменить отделение</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-110">
                <Form code={code} />
            </DialogContent>
        </Dialog>
    )
}

const Form = ({ code }: { code: string }) => {
    const { form, submitHandler } = useMyForm<TformUpdateDepartment>(
        formUpdateDepartment,
        async (data: TformUpdateDepartment) => {
            updateDepartmentAction(data)
                .then(res => handleAccess(res, {}))
                .catch(handleCatch)
        },
        () => { },
        async () => {
            const data = await axiosInstance.get(`departments/${code}`)
            return data.data
        }
    )

    return <FormProvider {...form}>
        <form onSubmit={submitHandler}>
            <DialogHeader className="pb-5">
                <DialogTitle><Title>Изменить отделение {code}</Title></DialogTitle>
                <DialogDescription>Изменение отделения {code}</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
                <FormInput placeholder="Код" className="h-10" name="code" />
                <FormInput placeholder="Название" className="h-10" name="name" />
            </div>
            <DefaultFooter>
                <Button variant="outline" className="text-dark">Отмена</Button>
                <Button type="submit" variant={'primary'}>Добавить</Button>
            </DefaultFooter>
        </form>
    </FormProvider>
}
