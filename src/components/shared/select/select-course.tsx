import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/src/components/ui/select"

export function SelectCourse() {
    return (
        <Select>
            <SelectTrigger className="w-full h-[40px] cursor-pointer">
                <SelectValue placeholder="Курс" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Курсы</SelectLabel>
                    {[1, 2, 3, 4, 5].map(item => <SelectItem key={item} value={item.toString()}>{item}</SelectItem>)}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
