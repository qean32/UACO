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

export function SelectPeriod() {
    return (
        <Select>
            <SelectTrigger className="h-[40px] bg-white cursor-pointer">
                <SelectValue placeholder="Месяц" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Все время</SelectLabel>
                    <SelectItem value="1">Месяц</SelectItem>
                    <SelectItem value="2">Год</SelectItem>
                    <SelectItem value="3">Все время</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
