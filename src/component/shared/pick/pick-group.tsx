import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/component/ui/select"

export function PickGroup() {
    return (
        <Select>
            <SelectTrigger className="w-full h-[40px] cursor-pointer">
                <SelectValue placeholder="Группа" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Группа</SelectLabel>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
