import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/component/ui/select"
import { pick_months } from "@/config"

export function PickMounth() {
    return (
        <Select>
            <SelectTrigger className="h-10 bg-white cursor-pointer">
                <SelectValue placeholder="Месяц" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Месяц</SelectLabel>
                    {pick_months.map(item => {
                        return <SelectItem key={item.value} value={item.value}>{item.title}</SelectItem>
                    })}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
