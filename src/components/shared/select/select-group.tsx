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
import { fakeGroup } from "@/export"

export function Select_Group() {
    return (
        <Select>
            <SelectTrigger className="w-full h-[40px] cursor-pointer">
                <SelectValue placeholder="Группа" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Организаторы</SelectLabel>
                    {fakeGroup.map(item => <SelectItem key={item} value={item}>{item}</SelectItem>)}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
