'use client'

import { Field, FieldDescription } from "@/component/ui/field"
import { Input } from "@/component/ui/input"
import { useFormContext } from "react-hook-form"

export function InputFile() {
    const { register } = useFormContext()
    return (
        <Field className="cursor-pointer">
            <Input id="picture" type="file" className="cursor-pointer" accept=".json" {...register("file")} />
            <FieldDescription className="px-1">Выберете фаил для загрузки.</FieldDescription>
        </Field>
    )
}
