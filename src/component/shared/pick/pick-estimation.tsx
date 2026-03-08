import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/component/ui/select"
import { pick_estimations } from "@/config"

export function PickEstimation() {
    return (
        <Select>
            <SelectTrigger className="w-full h-[40px] cursor-pointer bg-gray-50">
                <SelectValue placeholder="Оценить" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {pick_estimations.map(item => {
                        return <SelectItem value={item}>{item}</SelectItem>
                    })}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
