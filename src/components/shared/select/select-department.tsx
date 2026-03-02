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
import { fakeDepartment } from "@/export"

export function SelectDepartment() {
    return (
        <Select>
            <SelectTrigger className="w-full h-[40px] cursor-pointer">
                <SelectValue placeholder="Отделение" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Организаторы</SelectLabel>
                    {fakeDepartment.map(item => <SelectItem key={item.id} value={item.name}>{item.name}</SelectItem>)}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
