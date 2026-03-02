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
import { fakeSuperviser } from "@/export"

export function SelectSupervisor() {
    return (
        <Select>
            <SelectTrigger className="w-full h-[40px] cursor-pointer">
                <SelectValue placeholder="Организатор" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Организаторы</SelectLabel>
                    {fakeSuperviser.map(item => <SelectItem key={item} value={item}>{item}</SelectItem>)}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
