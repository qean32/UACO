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
import { DatePicker, Title } from "../../ui"
import { PickCourse, PickGroup, PickDepartment } from "@/component/shared/pick"
import { FormProvider } from "react-hook-form"
import { useMyForm, usePushQuery } from "@/lib/hooks"
import { formFilterSchema, TformFilterSchema } from "@/@types/schema"
import { DefaultFooter } from "./default-footer"

export function FilterEvent() {
    const { push } = usePushQuery()

    const { form, submitHandler, setValue } = useMyForm<TformFilterSchema>(
        formFilterSchema,
        (data: TformFilterSchema) => {
            push(data)
            form.reset()
        })

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={'default'}>Фильтр</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-110">
                <FormProvider {...form}>
                    <form onSubmit={submitHandler}>
                        <DialogHeader className="pb-5">
                            <DialogTitle><Title>Фильтры</Title></DialogTitle>
                            <DialogDescription>Выберите курс, отделение, группу, или дату</DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4">
                            <PickCourse setValue={setValue} />
                            <PickDepartment setValue={setValue} />
                            <PickGroup setValue={setValue} />
                            <DatePicker setValue={setValue} />
                        </div>
                        <DefaultFooter>
                            <Button variant="outline" className="text-dark">Отмена</Button>
                            <Button type="submit" variant={'primary'}>Фильтр</Button>
                        </DefaultFooter>
                    </form>
                </FormProvider>
            </DialogContent>
        </Dialog>
    )
}
