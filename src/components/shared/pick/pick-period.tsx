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

export function PickPeriod() {
    return (
        <Select>
            <SelectTrigger className="h-[40px] bg-white cursor-pointer">
                <SelectValue placeholder="Период" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Период</SelectLabel>
                    <SelectItem value="1">Месяц</SelectItem>
                    <SelectItem value="2">Год</SelectItem>
                    <SelectItem value="3">Все время</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
