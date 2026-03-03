import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function PickCourse() {
    return (
        <Select>
            <SelectTrigger className="w-full h-[40px] cursor-pointer">
                <SelectValue placeholder="Курс" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Курс</SelectLabel>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
