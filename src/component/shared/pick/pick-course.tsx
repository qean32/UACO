import { setValueFormProps, TformFilterSchema } from "@/@types/schema"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/component/ui/select"
import { pick_courses } from "@/config"

export function PickCourse({ setValue }: setValueFormProps<TformFilterSchema>) {
    return (
        <Select name="date" onValueChange={(e) => { setValue('course', e.toString()) }}>
            <SelectTrigger className="w-full h-10 cursor-pointer">
                <SelectValue placeholder="Курс" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Курс</SelectLabel>
                    {pick_courses.map(item => {
                        return <SelectItem key={item} value={item}>{item}</SelectItem>
                    })}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
