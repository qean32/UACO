import { Field, FieldDescription, FieldLabel } from "@/component/ui/field"
import { Input } from "@/component/ui/input"

export function InputFile() {
    return (
        <Field className="cursor-pointer">
            <Input id="picture" type="file" className="cursor-pointer" accept=".json" />
            <FieldDescription className="px-1">Выберете фаил для загрузки.</FieldDescription>
        </Field>
    )
}
