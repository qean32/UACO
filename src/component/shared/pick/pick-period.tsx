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
            <SelectTrigger className="h-10 bg-white cursor-pointer mr-5">
                <SelectValue placeholder="Период" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Период</SelectLabel>
                    {pick_periods.map(({ ru, value }) => {
                        return <SelectItem key={ru} value={value}>{ru}</SelectItem>
                    })}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
