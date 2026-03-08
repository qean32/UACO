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

export function PickCourse() {
    return (
        <Select>
            <SelectTrigger className="w-full h-[40px] cursor-pointer">
                <SelectValue placeholder="Курс" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Курс</SelectLabel>
                    {pick_courses.map(item => {
                        return <SelectItem value={item}>{item}</SelectItem>
                    })}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
