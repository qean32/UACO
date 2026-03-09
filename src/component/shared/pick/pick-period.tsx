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

export function PickPeriod() {
    return (
        <Select>
            <SelectTrigger className="h-[40px] bg-white cursor-pointer">
                <SelectValue placeholder="Период" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Период</SelectLabel>
                    {pick_periods.map(item => {
                        return <SelectItem key={item.value} value={item.value}>{item.title}</SelectItem>
                    })}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
