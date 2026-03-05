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

export function PickDepartment() {
    return (
        <Select>
            <SelectTrigger className="w-full h-[40px] cursor-pointer">
                <SelectValue placeholder="Отделение" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Отделение</SelectLabel>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
