'use client'

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/component/ui/select"
import { pick_periods } from "@/config"
import { usePushQuery } from "@/lib/hooks"

export function PickPeriod() {
    const { push } = usePushQuery()

    return (
        <Select onValueChange={(e) => { push({ period: e }) }}>
            <SelectTrigger className="h-[40px] bg-white cursor-pointer mr-5">
                <SelectValue placeholder="Период" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Период</SelectLabel>
                    {pick_periods.map(item => {
                        return <SelectItem key={item.value} value={item.title}>{item.title}</SelectItem>
                    })}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
