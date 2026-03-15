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
import { DatePicker, Title } from "../../ui"
import { PickCourse, PickGroup, PickDepartment } from "@/component/shared/pick"
import { FormProvider } from "react-hook-form"
import { useMyForm, useFilterEvent } from "@/lib/hooks"
import { formFilterSchema, TformFilterSchema } from "@/@types/schema"

export function FilterEvent() {
    const { push } = useFilterEvent()

    const { form, submitHandler, setValue } = useMyForm<TformFilterSchema>(
        formFilterSchema,
        (data: TformFilterSchema) => {
            push(data)
            form.reset()
        }
    )

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={'default'}>Фильтр</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
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
                        <DialogFooter className="pt-8 justify-start">
                            <DialogClose asChild>
                                <Button variant="outline" className="text-dark">Отмена</Button>
                            </DialogClose>
                            <DialogClose asChild>
                                <Button type="submit" variant={'primary'}>Фильтр</Button>
                            </DialogClose>
                        </DialogFooter>
                    </form>
                </FormProvider>
            </DialogContent>
        </Dialog>
    )
}
